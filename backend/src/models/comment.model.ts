import { prisma } from "../lib/prisma";


export const createComment = async (userId: string, videoId: string, text: string) => {
    return await prisma.comment.create({
        data: {
            userId,
            uploadId: videoId,
            comment: text
        }
    });
};