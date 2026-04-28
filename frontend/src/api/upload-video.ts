import axios from "axios";
import { HTTP_URL } from "../config";
import { getToken } from "../utils/token";

export interface UploadVideoError {
    response?: {
        data?: {
            message?: string;
        }
    },
    message: string;
}

export const uploadVideo = async (data: {
    title: string;
    description: string;
    visibility: string;
}) => {
    try {
        console.log('token > ', getToken()); 
        const response = await axios.post(`${HTTP_URL}/videos`, data, {
            headers: {
                Authorization: getToken()
            }
        });
        return response.data;
    } catch (error) {
        const err = error as UploadVideoError;
        if (axios.isAxiosError(err)) {
            if (err.response) {
                if (err.response.data.error) {
                    throw new Error(err.response.data.error);
                }
                throw new Error(err.response.data?.message || 'Upload Video Failed');
            } else {
                throw new Error('Network error. Please check your connection.');
            }
        }       
    }
}