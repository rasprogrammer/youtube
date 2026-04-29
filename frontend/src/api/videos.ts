import axios from "axios"
import { HTTP_URL } from "../config"
import { getToken } from "../utils/token"


export const videoFeed = async () => {
    try {
        const response = await axios.get(`${HTTP_URL}/videos/feed`, {
            headers: {
                Authorization: getToken()
            }
        });
        console.log('response > ', response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
}

export const recommendationVideos = async () => {
    try {
        const response = await axios.get(`${HTTP_URL}/videos/feed`, {
            headers: {
                Authorization: getToken()
            }
        });
        console.log('response > ', response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        throw error;
    }
}