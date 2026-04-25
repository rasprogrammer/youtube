import express from "express";

const router = express.Router();

// Get user details
router.get("/:id", (req, res) => {
    return res.send();
});

// Get user channel
router.get("/:id/channel", (req, res) => {
    return res.send();
});

// Get subscriptions
router.get("/me/subscriptions", (req, res) => {
    return res.send();
});



export default router;