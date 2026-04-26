import type { Response } from "express";
import type { AuthRequest } from "../utils/request-type";
import { HttpStatus } from "../utils/HttpStatus";
import { createChannelSchema } from "../validations/channelSchema";
import { createChannelService } from "../services/channel.service";
import { asyncHandler } from "../middlewares/asyncHandler";

export const createChannel = asyncHandler(
    async (req: AuthRequest, res: Response) => {
        const userId = req.auth?.id;

        if (!userId) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                success: false,
                error: "Unauthorized access"
            });
        }

        // validate body
        const parsed = createChannelSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                success: false,
                error: parsed.error
            });
        }

        const { channelName } = parsed.data;

        try {
            const channel = await createChannelService(userId, channelName);

            return res.status(HttpStatus.CREATED).json({
                success: true,
                message: "Channel created successfully",
                data: channel
            });
        } catch (error: any) {
            if (error.message === "USER_NOT_FOUND") {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    success: false,
                    error: "Unauthorized access"
                });
            }

            if (error.message === "CHANNEL_EXISTS") {
                return res.status(HttpStatus.CONFLICT).json({
                    success: false,
                    error: "Channel already exists"
                });
            }

            throw error; // handled by global error middleware
        }
    }
);

export const updateChannel = asyncHandler(
    async (req: AuthRequest, res: Response) => {
        const userId = req.auth?.id;

        if (!userId) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                success: false,
                error: "Unauthorized access"
            });
        }
    }
);