import { prisma } from "../lib/prisma";

export const createChannelService = async (
    userId: string,
    title: string,
    handle: string,
    avatar?: string
) => {

    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        throw new Error("USER_NOT_FOUND");
    }

    const existingChannel = await prisma.channel.findUnique({
        where: { userId }
    });

    if (existingChannel) {
        throw new Error("CHANNEL_EXISTS");
    }

    const existingHandle = await prisma.channel.findUnique({
        where: { handle }
    });

    if (existingHandle) {
        throw new Error("HANDLE_ALREADY_EXISTS");
    }

    return prisma.channel.create({
        data: {
            userId,
            title,
            handle,
            avatar
        }
    });
};