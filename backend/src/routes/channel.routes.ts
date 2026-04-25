import express from "express";

const router = express.Router();

// Subscribe channel 
router.post("/:id/subscribe", (req, res) => {
    return res.send();
});

// Remove subscribe from channel 
router.delete("/:id/subscribe", (req, res) => {
    return res.send();
});


export default router;