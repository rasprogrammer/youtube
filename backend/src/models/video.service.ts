import { prisma } from "../lib/prisma"


export const getVideoBySlug = async (slug: string) => {
    return await prisma.upload.findFirst({
        where: { slug }
    });
}