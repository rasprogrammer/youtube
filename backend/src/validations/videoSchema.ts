import { z } from "zod";


export const uploadTypeEnum = z.enum(["PUBLIC", "PRIVATE", "UNLISTED"]);

export const uploadBaseSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(150, "Title must not exceed 150 characters"),

    description: z
        .string()
        .max(5000, "Description too long")
        .optional(),

    type: uploadTypeEnum.optional(), // default handled by DB
});


export const createUploadSchema = uploadBaseSchema;


export const updateUploadSchema = uploadBaseSchema.partial();


export const uploadParamsSchema = z.object({
    slug: z.string().min(3)
});


export type CreateUploadInput = z.infer<typeof createUploadSchema>;
export type UpdateUploadInput = z.infer<typeof updateUploadSchema>;