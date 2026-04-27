import express from "express";
import { getSingleVideo, likeOnUpload, uploadVideo } from "../controllers/upload.controller";
import { uploadVideoAndThumbnail } from "../config/multer.upload";
import { auth } from "../middlewares/auth";

const router = express.Router();

// Upload Video
router.post(
    "/", 
    auth, 
    uploadVideo
);

// Get Videos 
router.get("/", (req, res) => {
    return res.send();
});

// Get Single Video
router.get("/:slug", getSingleVideo);

// Delete Video
router.delete("/:id", (req, res) => {
    return res.send();
});

// Update Video Metadata
router.patch("/:id", (req, res) => {
    return res.send();
});

// Get Video Thumbnail
router.get('/:id/thumbnail', (req, res) => {
    return res.send();
})

// Like video
router.post("/:slug/like", auth, likeOnUpload);

// Remove like from video 
router.delete("/:slug/like", (req, res) => {
    return res.send();
});

// Get videos feed 
router.get("/feed", (req, res) => {
    return res.send();
});

export default router;