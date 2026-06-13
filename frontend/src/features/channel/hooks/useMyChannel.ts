import { useQuery } from "@tanstack/react-query"
import { getMyChannel } from "../api/channel-api";


export const useMyChannel = () => {

    return useQuery({
        queryKey: ["channel"],
        queryFn: getMyChannel,
        retry: false,
    });

}