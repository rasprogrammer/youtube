import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getMe,
    retry: false,
  });
};