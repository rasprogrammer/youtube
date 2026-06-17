import { useQuery } from "@tanstack/react-query"
import { getMyChannel } from "../api/channel-api";
import { useAuthStore } from "../../../app/store/auth.store";


export const useMyChannel = () => {

    const user = useAuthStore((state) => state.user);

    return useQuery({
        queryKey: ["channel", user?.id],
        queryFn: () => getMyChannel(user!.id),
        retry: false,
        enabled: !!user,
    });

}