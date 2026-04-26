import { prisma } from "../lib/prisma";

export const createChannelService = async (
    userId: string,
    channelName: string
) => {
    // check user
    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        throw new Error("USER_NOT_FOUND");
    }

    // check existing channel
    const existingChannel = await prisma.channel.findUnique({
        where: { userId }
    });

    if (existingChannel) {
        throw new Error("CHANNEL_EXISTS");
    }

    // create
    return prisma.channel.create({
        data: {
            userId,
            channelName
        }
    });
};