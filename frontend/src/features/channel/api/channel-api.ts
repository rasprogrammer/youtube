import axios from "axios";
import { HTTP_URL } from "../../../config";


export const getChannel = async ({userId} : {userId: string}) => {
    try {
        const response = await axios.get(`${HTTP_URL}/users/${userId}/channel`);
        console.log('response > ', response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
}