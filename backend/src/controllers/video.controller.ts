import type { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import type { AuthRequest } from "../utils/request-type";
import { HttpStatus } from "../utils/HttpStatus";
import { createUploadSchema, uploadParamsSchema } from "../validations/videoSchema";
import { prisma } from "../lib/prisma";
import { generateSlug } from "../utils/generateSlug";
import { getChannelId } from "../models/channel.model";
// import { uploadImage, uploadVideoFile } from "../services/upload.service";


export const uploadVideo = asyncHandler(
    async (req: AuthRequest, res: Response) => {

        const userId = req.auth?.id;
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

        // validate body
        const parsed = createUploadSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                success: false,
                error: parsed.error
            });
        }

        // FILE VALIDATION
        // const video = req.files?.["video"]?.[0];
        // const thumbnail = req.files?.["thumbnail"]?.[0];

        //  if (!video) {
        //     return res.status(400).json({
        //         success: false,
        //         error: "Video file is required"
        //     });
        // }
     
        // if (!VIDEO_MIME_TYPES.includes(video.mimetype)) {
        //     return res.status(400).json({
        //         success: false,
        //         error: "Invalid video format"
        //     });
        // }

        // if (thumbnail && !IMAGE_MIME_TYPES.includes(thumbnail.mimetype)) {
        //    return res.status(400).json({
        //         success: false,
        //         error: "Invalid thumbnail format"
        //     });
        // }

        // generate slug 
        const slug = generateSlug();

        // upload to storage 
        // const videoUrl = await uploadVideoFile(video);
        // const thumbnailUrl = thumbnail ? await uploadImage(thumbnail) : null;
        const videoUrl = "dummy url";
        const thumbnail = "dummy thumbnail";

        const upload = await prisma.upload.create({
            data: {
                channelId: channel.id,
                slug,
                videoUrl,
                thumbnail,
                ...parsed.data
            }
        });

        return res.status(201).json({
            success: true,
            data: upload
        });

    }
);

export const getSingleVideo = asyncHandler(
    async (req: Request, res: Response) => {

        const parsed = uploadParamsSchema.safeParse(req.params);
        if (!parsed.success) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                success: false, 
                error:  parsed.error.message
            });
        }

        const { slug } = parsed.data;

        const video = await prisma.upload.findFirst({
            where: { slug }
        });

        if (!video) {
            return res.status(HttpStatus.NOT_FOUND).json({
                success: false, 
                error: 'Video not available',
            }); 
        }

        return res.status(HttpStatus.OK).json({
            success: true, 
            message: 'Video fetched successfully',
            data: video
        });
    }
);
