import express from "express";

const router = express.Router();

// Get user watched history
router.get("/", (req, res) => {
    return res.send();
});

// Add in watched history 
router.get("/", (req, res) => {
    return res.send();
});

// Delete from watched history
router.delete("/:id", (req, res) => {
    return res.send();
});



export default router;