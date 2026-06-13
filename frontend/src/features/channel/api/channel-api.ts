import axios from "axios";
import { HTTP_URL } from "../../../config";
import { useAuthStore } from "../../../app/store/auth.store";


export const getMyChannel = async () => {

    const user = useAuthStore((state) => state.user);
    if (!user) {
        throw new Error("User not found");
    }

    const userId = user._id;

    try {
        const response = await axios.get(`${HTTP_URL}/users/${userId}/channel`);
        return response.data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
}