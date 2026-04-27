import axios from "axios";
import { HTTP_URL } from "../config";


export interface AuthError {
    response?: {
        data?: {
            message?: string;
        }
    },
    message: string;
}

export const signupUser = async (userData : {
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    password: string;
    dob: string; 
    gender: string;
}) => {
    try {
        const response = await axios.post(`${HTTP_URL}/auth/signup`, userData);
        return response.data; 
    } catch (error) {
        const err = error as AuthError;
        if (axios.isAxiosError(err)) {
            if (err.response) {
                if (err.response.data.error) {
                    throw new Error(err.response.data.error);
                }
                throw new Error(err.response.data?.message || 'Signup failed');
            } else {
                throw new Error('Network error. Please check your connection.');
            }
        }
    }
};


export const signinUser = async (credentials: {
    email: string;
    password: string;
}) => {
    try {
        const response = await axios.post(`${HTTP_URL}/auth/signin`, credentials);
        return response.data;
    } catch (error) {
        const err = error as AuthError; 
        if (axios.isAxiosError(err)) {
            if (err.response) {
                if (err.response.data.error) {
                    throw new Error(err.response.data.error);
                }
                throw new Error(err.response.data?.message || 'Signin failed');
            } else {
                throw new Error('Network error. Please check your connection.');
            }
        }
    }
}