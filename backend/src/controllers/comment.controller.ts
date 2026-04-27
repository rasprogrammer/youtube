import type { Response } from "express";
import type { AuthRequest } from "../utils/request-type";
import { asyncHandler } from "../middlewares/asyncHandler";
import { HttpStatus } from "../utils/HttpStatus";
import { getUploadBySlug } from "../models/upload.model";
import { createComment } from "../models/comment.model";


export const createCommentOnUpload = asyncHandler(
    async (req: AuthRequest, res: Response) => {

        // userId and slug
        const userId = req.auth?.id;
        const slug = req.params.slug as string;

        if (!userId) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        if (!slug) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                success: false,
                message: 'Invalid request'
            });
        }


        const video = await getUploadBySlug(slug);
        if (!video) {
            return res.status(HttpStatus.NOT_FOUND).json({
                success: false, 
                error: 'Video not available'
            });
        }

        // store comment in database
        const comment = await createComment(userId, video.id, req.body.text);

        return res.status(HttpStatus.CREATED).json({
            success: true,
            message: 'Comment created successfully',
            data: comment
        });
    }
);