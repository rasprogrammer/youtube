// app/providers/AuthProvider.tsx

import { useEffect } from "react";
import { useCurrentUser } from "../../features/auth/hooks/useCurrentUser";
import { useAuthStore } from "../store/auth.store";

export default function AuthProvider() {
    const setUser = useAuthStore((state) => state.setUser);

    const { data } = useCurrentUser();

    useEffect(() => {
        if (data?.user) {
        setUser(data.user);
        }
    }, [data]);

    return null;
}