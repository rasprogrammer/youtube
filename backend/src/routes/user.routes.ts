import express from "express";
import { getUserChannel } from "../controllers/user.controller";
import { auth } from "../middlewares/auth";

const router = express.Router();

// Get user details
router.get("/:id", (req, res) => {
    return res.send();
});

// Get user channel
router.get("/:id/channel", getUserChannel);

// Get subscriptions
router.get("/me/subscriptions", (req, res) => {
    return res.send();
});



export default router;