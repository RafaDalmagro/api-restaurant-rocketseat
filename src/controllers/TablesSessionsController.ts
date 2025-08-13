import { Request, Response, NextFunction } from "express";
import { db } from "@/database/knex.js";

export class TablesSessionsController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const tableSessions = await db("table_sessions")
                .select("table_sessions.*", "tables.table_number")
                .innerJoin("tables", "table_sessions.table_id", "tables.id")
                .orderBy("tables.table_number");
            return res.json(tableSessions);
        } catch (error) {
            next(error);
        }
    }
}
