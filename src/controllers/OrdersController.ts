import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { db } from "@/database/knex.js";
import { AppError } from "@/utils/AppError.js";

export class OrdersController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const bodyScheme = z.object({
                table_session_id: z.number(),
                product_id: z.number(),
                quantity: z.number(),
            });
            const { table_session_id, product_id, quantity } = bodyScheme.parse(
                req.body
            );

            const session = await db<TablesSessionsRepository>(
                "tables_sessions"
            )
                .where({ id: table_session_id })
                .first();

            if (!session) {
                throw new AppError("Session not found");
            }
            if (session.closed_at) {
                throw new AppError("Session is closed");
            }

            const product = await db<ProductRepository>("products")
                .where({ id: product_id })
                .first();

            if (!product) {
                throw new AppError("Product not found");
            }
            console.log("Session");

            await db<OrderRepository>("orders").insert({
                table_session_id,
                product_id,
                quantity,
                price: product.price,
            });

            return res.status(201).json();
        } catch (error) {
            next(error);
        }
    }

    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const { table_session_id } = req.params;

            const order = await db("orders")
                .select(
                    "orders.id",
                    "orders.table_session_id",
                    "orders.product_id",
                    "products.name",
                    "orders.price",
                    "orders.quantity",
                    db.raw("(orders.quantity * orders.price) AS total"),
                    "orders.created_at",
                    "orders.updated_at"
                )
                .join("products", "products.id", "orders.product_id")
                .where({
                    table_session_id,
                })
                .orderBy("orders.created_at", "desc");

            return res.json(order);
        } catch (error) {
            next(error);
        }
    }

    async show(req: Request, res: Response, next: NextFunction) {
        try {
            const { table_session_id } = req.params;

            const order = await db("orders")
                .select(
                    db.raw(
                        "COALESCE(SUM(orders.quantity * orders.price), 0) AS total"
                    ),
                    db.raw("COALESCE(SUM(orders.quantity), 0) AS quantity")
                )
                .where({
                    table_session_id,
                })
                .first();

            return res.json(order);
        } catch (error) {
            next(error);
        }
    }
}
