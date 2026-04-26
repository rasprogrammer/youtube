import type { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err);

    return res.status(500).json({
        success: false,
        error: "Internal Server Error"
    });
};