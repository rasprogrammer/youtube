import axios from "axios";
import { HTTP_URL } from "../../../config";


export const getMe = async () => {
    const token : string = localStorage.getItem('token') || '';
    console.log('token > ', token); 

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