const URL = require('../models/url');
const shortid = require('shortid');

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" });
    const shortID = shortid.generate();

    // Create the new short URL entry
    const result = await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [], 
    });
    
    // Fetch all URLs to pass to the template
    const allUrls = await URL.find();

    // Render the home view with the new ID and the list of URLs
    return res.render("home", {
        id: result.shortId,  // Ensure id is passed, even if undefined
        urls: allUrls,
    });
}

async function handlegetAnalitcs(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handlegetAnalitcs
};
