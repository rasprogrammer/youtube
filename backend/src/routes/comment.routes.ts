import express from "express";
import { createCommentOnUpload } from "../controllers/comment.controller";

const router = express.Router();

// Create comment on video
router.post("/:slug", createCommentOnUpload);

// Reply comment
router.post("/:commentId/reply", (req, res) => {
    return res.send();
});

// Get comments 
router.get("/", (req, res) => {
    return res.send();
});

// Get single comment
router.get("/:id", (req, res) => {
    return res.send();
});

// Delete comment
router.delete("/:id", (req, res) => {
    return res.send();
});

// Edit comment
router.patch("/:id", (req, res) => {
    return res.send();
});

export default router;