import { AppError } from "@/utils/AppError.js";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(
    err: any,
    req: Request,
    res: Response,
    _: NextFunction
) {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            message: err.message,
        });
    }

    if (err instanceof ZodError) {
        return res.status(400).json({
            message: "Validation error",
            issues: err.format(),
        });
    }
    return res.status(500).json({
        message: err.message,
    });
}
