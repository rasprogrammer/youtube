import { z } from "zod";

export const createChannelSchema = z.object({
    channelName: z
        .string()
        .min(3, "Channel name must be at least 3 characters")
        .max(50, "Channel name must not exceed 50 characters")
});

export type CreateChannelInput = z.infer<typeof createChannelSchema>;

export const updateChannelSchema = z.object({
    
});