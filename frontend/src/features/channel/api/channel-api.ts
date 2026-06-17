import axios from "axios";
import { HTTP_URL } from "../../../config";
import { useAuthStore } from "../../../app/store/auth.store";
import { getToken } from "../../../app/utils/authToken";


export const getMyChannel = async (userId: string) => {

    if (!userId) {
        throw new Error("User not found");
    }

    try {
        const response = await axios.get(`${HTTP_URL}/users/${userId}/channel`);
        return response.data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
}

//
export interface CreateChannelPayload {
    title: string;
    handle: string;
    avatar?: File | null;
}

export const createChannel = async (
    payload: CreateChannelPayload
) => {
    const formData = new FormData();

    formData.append("title", payload.title);
    formData.append("handle", payload.handle);

    if (payload.avatar) {
        formData.append("avatar", payload.avatar);
    }

    const response = await axios.post(
        `${HTTP_URL}/channels`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${getToken()}`,
            },
        }
    );

    return response.data;
};