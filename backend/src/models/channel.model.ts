import { prisma } from "../lib/prisma";
import type { AuthRequest } from "../utils/request-type";


export const getChannelId = async (userId: string) => {
    const channel = await prisma.channel.findUnique({
        where: { userId }
    });

    return channel;
}