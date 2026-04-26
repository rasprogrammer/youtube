import multer, { type Multer } from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "video") {
            cb(null, "uploads/videos/");
        } else if (file.fieldname === "thumbnail") {
            cb(null, "uploads/images/");
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " - " + file.originalname);
    }
});


const filter: multer.Options["fileFilter"] = (req, file, cb) => {
    if (file.fieldname === "video" && file.mimetype.startsWith("video/")) {
        cb(null, true); 
    } else if (file.fieldname === "thumbnail" && file.mimetype.startsWith("image/")) {
        cb(null, true); 
    } else {
        cb(new Error("Invalid file type"));
    }
}

export const uploadVideoAndThumbnail = multer({
    storage,
    fileFilter: filter
});