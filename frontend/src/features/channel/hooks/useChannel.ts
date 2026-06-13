import { useQuery } from "@tanstack/react-query"
import { getChannel } from "../api/channel-api";


export const useChannel = (userId: string) => {

    const channelQuery = useQuery({
        queryKey: ["channel", userId],
        queryFn: () => getChannel({userId}),
        enabled: !!userId,
        retry: false,
    });

    console.log("channel status", channelQuery.status);
    console.log("channel data", channelQuery.data);

    return {
        channel: channelQuery.data,
        isLoading: channelQuery.isLoading,
        error: channelQuery.error,
  };
}