import { nanoid } from "nanoid";

export const generateSlug = () => {
    return nanoid(10);
}

console.log(generateSlug());