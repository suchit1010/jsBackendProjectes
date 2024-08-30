const User = require("../models/user");
const URL = require("../models/url");

async function handleUserSignup(req, res) {
    // Destructure the request body to get the name, email, and password fields
    const { name, email, password } = req.body;

    // Create a new user in the database with the provided details
    await User.create({
        name,
        email,
        password,
    });

    // Fetch all URLs from the database.
    // This is necessary because the home.ejs view expects a list of URLs to display.
    const allUrls = await URL.find();

    // Render the home.ejs view and pass the fetched URLs.
    // This ensures that the home page will display the URLs after the user signs up.
    return res.render("home", {
        urls: allUrls,
    });
}

module.exports = {
    handleUserSignup,
};
