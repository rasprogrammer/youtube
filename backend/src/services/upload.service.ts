import cloudinary from "../lib/cloudinary";

/**
 * Upload Video
 */
export const uploadVideoFile = async (file: any) => {
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "video",
            folder: "videos",
            quality: "auto",
        });

        return result.secure_url;
    } catch (error) {
        console.error("Video upload error:", error);
        throw new Error("VIDEO_UPLOAD_FAILED");
    }
};

/**
 * Upload Image (Thumbnail)
 */
export const uploadImage = async (file: any) => {
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            resource_type: "image",
            folder: "thumbnails",
            transformation: [
                { width: 1280, height: 720, crop: "limit" }, // optimize size
                { quality: "auto" }
            ]
        });

        return result.secure_url;
    } catch (error) {
        console.error("Image upload error:", error);
        throw new Error("IMAGE_UPLOAD_FAILED");
    }
};