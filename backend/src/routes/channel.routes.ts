import express from "express";
import { createChannel, updateChannel } from "../controllers/channel.controller";
import { auth } from "../middlewares/auth";

const router = express.Router();

// create channel 
router.post('/', auth, createChannel);

// update channel
router.put('/', auth, updateChannel);

// Subscribe channel 
router.post("/:id/subscribe", (req, res) => {
    return res.send();
});

// Remove subscribe from channel 
router.delete("/:id/subscribe", (req, res) => {
    return res.send();
});


export default router;