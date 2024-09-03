const express = require('express');
const router = express.Router();
const URL = require('../models/url'); // Ensure the path to the model is correct
const { restrictTo } = require('../middlewares/auth');

// Route for admins to view all URLs
router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
    try {
        const allUrls = await URL.find({});
        return res.render("home", {
            urls: allUrls,
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("An error occurred while fetching URLs.");
    }
});

// Route for normal users to view their URLs
router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    try {
        let urls;
        if (req.user.role === "ADMIN") {
            // Admin users should see all URLs
            urls = await URL.find({});
            console.log("Admin viewing all URLs");
        } else {
            // Normal users should only see their URLs
            urls = await URL.find({ createdBy: req.user._id });
            console.log("Normal user viewing their URLs");
        }

        return res.render("home", { urls });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("An error occurred while fetching URLs.");
    }
});


// Route to render signup page
router.get("/signup", async (req, res) => {
    try {
        return res.render("signup");
    } catch (error) {
        console.error("Error fetching signUp:", error);
        return res.status(500).send("An error occurred while fetching Users.");
    }
});

// Route to render login page
router.get("/login", async (req, res) => {
    try {
        return res.render("login");
    } catch (error) {
        console.error("Error fetching login:", error);
        return res.status(500).send("An error occurred while fetching Users.");
    }
});

module.exports = router;
