import axios from "axios";
import { HTTP_URL } from "../../../config";
import { getToken } from "../../../app/utils/authToken";


export const getMe = async () => {

    const token = getToken();
    if (!token) {
        throw new Error('Authorization failed');
    }

    try {
        const response = await axios.get(`${HTTP_URL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.log('error > ', error);
        throw new Error('Authorization failed');
    }
};