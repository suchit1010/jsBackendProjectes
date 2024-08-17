const express = require('express');
const router = express.Router();
const URL = require('../models/url'); // Ensure the path to the model is correct

router.get("/", async (req, res) => {
    try {
        const allUrls = await URL.find(); // Fetch all URLs from the database
        return res.render("home", {
            urls: allUrls, // Pass the URLs to the template
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("An error occurred while fetching URLs.");
    }
});

module.exports = router;

