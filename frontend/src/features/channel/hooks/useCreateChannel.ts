import { useMutation } from "@tanstack/react-query";
import { createChannel } from "../api/channel-api";

export const useCreateChannel = () => {
    return useMutation({
        mutationFn: createChannel,
    });
};