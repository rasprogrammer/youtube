import { asyncHandler } from "../middlewares/asyncHandler";
import { HttpStatus } from "../utils/HttpStatus";
import type { Request, Response } from "express";
import { getChannelId } from "../models/channel.model";


export const getUserChannel = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = req.params.id as string;

        if (!userId) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                success: false,
                error: "Unauthorized access"
            });
        }

        const channel = await getChannelId(userId);
        if (!channel) {
            return res.status(HttpStatus.NOT_FOUND).json({
                success: false,
                error: "Channel not found"
            });
        }

        return res.status(HttpStatus.OK).json({
            success: true,
            message: "Channel fetched successfully",
            data: channel
        });
    }
);