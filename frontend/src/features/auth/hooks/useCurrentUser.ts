import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/getMe";
import { useAuthStore } from "../../../app/store/auth.store";
import { useEffect } from "react";

export const useCurrentUser = () => {

  const currentUserQuery = useQuery({
    queryKey: ["current-user"],
    queryFn: getMe,
    enabled: !!localStorage.getItem("token"),
    retry: false,
  });

  return currentUserQuery;
};