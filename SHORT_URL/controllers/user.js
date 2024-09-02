const User = require("../models/user");
const {setUser} = require("../service/auth");

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

  // Render the home.ejs view and pass the fetched URLs.
  // This ensures that the home page will display the URLs after the user signs up.


  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "invalid UserName or Password",
    });


  const token = setUser(user);
  res.cookie("token", token);
  return res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
