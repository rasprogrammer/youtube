import { prisma } from "../lib/prisma"


export const likedVideo = async (userId: string, videoId: string) => {
    return await prisma.like.findFirst({
        where: {
            userId, 
            uploadId: videoId
        }
    });
}

export const createLikeOnVideo = async (userId: string, videoId: string) => {
    console.log('userId > ', userId, ' videoId > ', videoId); 
    return await prisma.$transaction(async (tx) => {
        const like = await tx.like.create({
            data: {
                userId,
                uploadId: videoId
            }
        });

        await tx.upload.update({
            where: {
                id: videoId
            },
            data: {
                likeCount: {
                    increment: 1
                }
            }
        });

        return like;
    });
}