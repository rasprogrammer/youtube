import { z } from "zod";

export const createChannelSchema = z.object({
    title: z
        .string()
        .min(3, "Channel name must be at least 3 characters")
        .max(50, "Channel name must not exceed 50 characters")
        .nonempty({ message: "Channel name is required" }),
    handle: z
        .string()
        .min(3, "Channel handle must be at least 3 characters")
        .max(50, "Channel handle must not exceed 50 characters")
        .nonempty({ message: "Channel handle is required" })
        .regex(/^[a-zA-Z0-9_]+$/, "Channel handle can only contain letters, numbers, and underscores"),
    avatar: z.any().optional(),
});

export type CreateChannelInput = z.infer<typeof createChannelSchema>;

export const updateChannelSchema = z.object({
    
});