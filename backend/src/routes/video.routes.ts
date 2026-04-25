import express from "express";

const router = express.Router();

// Upload Video
router.post("/", (req, res) => {
    return res.send();
});

// Get Videos 
router.get("/", (req, res) => {
    return res.send();
});

// Get Single Video
router.get("/:id", (req, res) => {
    return res.send();
});

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
router.post("/:id/like", (req, res) => {
    return res.send();
});

// Remove like from video 
router.delete("/:id/like", (req, res) => {
    return res.send();
});

// Get videos feed 
router.get("/feed", (req, res) => {
    return res.send();
});

export default router;