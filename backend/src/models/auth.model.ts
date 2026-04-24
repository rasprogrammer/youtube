import { prisma } from "../lib/prisma.js"
import type { GenderType } from "../types/gender.js";

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
}

export const createUser = async (
    name: string,
    firstName: string,
    lastName: string,
    gender: GenderType,
    dob: Date,
    email: string,
    hashedPassword: string,
) => {
    return await prisma.user.create({
        data: {
            name,
            firstName,
            lastName,
            gender,
            email,
            dob,
            password: hashedPassword,
        }
    });
}

export const getUserById = async (userId: string) => {
    return await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
}