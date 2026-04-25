import express from "express";

const router = express.Router();

// Search videos
router.get("/search", (req, res) => {
    return res.send();
});


export default router;