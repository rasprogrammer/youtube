import express from "express";

const router = express.Router();

// Create comment
router.post("", (req, res) => {
    return res.send();
});

// Reply comment
router.post("/:id/reply", (req, res) => {
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