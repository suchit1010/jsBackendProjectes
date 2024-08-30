const express = require('express');
const router = express.Router();
const URL = require('../models/url'); // Ensure the path to the model is correct

router.get("/", async (req, res) => {
    try {
        const allUrls = await URL.find();
        console.log("Fetched URLs:", allUrls);
        return res.render("home", {
            urls: allUrls,
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("An error occurred while fetching URLs.");
    }
});


router.get("/signup", async (req, res) => {
    try {
        return res.render("signup");
        
    } catch (error) {
        console.error("Error fetching signUp:", error);
        return res.status(500).send("An error occurred while fetching Users.");
    }
});


router.get("/login", async (req, res) => {
    try {
        return res.render("login");
        
    } catch (error) {
        console.error("Error fetching signUp:", error);
        return res.status(500).send("An error occurred while fetching Users.");
    }
});

module.exports = router;

