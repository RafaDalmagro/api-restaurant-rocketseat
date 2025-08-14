import { Request, Response, NextFunction } from "express";
import { db } from "@/database/knex.js";
import { z } from "zod";
import { AppError } from "@/utils/AppError.js";

export class TablesSessionsController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const tableSessionSchema = z.object({
                table_id: z.number(),
            });

            const { table_id } = tableSessionSchema.parse(req.body);

            const session = await db<TablesSessionsRepository>(
                "tables_sessions"
            )
                .where({
                    table_id,
                })
                .orderBy("opened_at", "desc")
                .first();

            if (session && !session.closed_at) {
                throw new AppError("Mesa em uso!");
            }

            await db<TablesSessionsRepository>("tables_sessions").insert({
                table_id,
                opened_at: db.fn.now(),
            });

            return res.status(201).json();
        } catch (error) {
            next(error);
        }
    }

    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const sessions = await db<TablesSessionsRepository>(
                "tables_sessions"
            ).orderBy("closed_at");

            return res.json(sessions);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = z
                .string()
                .transform((value) => Number(value))
                .refine((value) => !isNaN(value), {
                    message: "id must be a number",
                })
                .parse(req.params.id);

            const sessions = await db<TablesSessionsRepository>(
                "tables_sessions"
            )
                .where({ id })
                .first();

            if (!sessions) {
                throw new AppError("Sessão não encontrada!");
            }

            if (sessions.closed_at) {
                throw new AppError("Sessão já encerrada!");
            }

            await db<TablesSessionsRepository>("tables_sessions")
                .update({
                    closed_at: db.fn.now(),
                })
                .where({ id });

            return res.json();
        } catch (error) {
            next(error);
        }
    }
}
