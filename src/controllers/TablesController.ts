import { Request, Response, NextFunction } from "express";
import { db } from "@/database/knex.js";

export class TablesController {
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const tables = await db<TableRepository>("tables").select().orderBy("table_number");
            return res.json(tables);
        } catch (error) {
            next(error);
        }
    }
}
