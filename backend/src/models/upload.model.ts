import { prisma } from "../lib/prisma"


export const getUploadBySlug = async (slug: string) => {
    return await prisma.upload.findFirst({
        where: { slug }
    });
}