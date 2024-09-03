const User = require("../models/user");
const {setUser} = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password, role } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    roles: role || "NORMAL",
  });
  
  // console.log("New User Role:", newUser.role);  // Log the role to verify
  

  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("login", {
      error: "Invalid Username or Password",
    });
  }

  const token = setUser(user);  // Generate a new token with the correct role
  res.cookie("token", token);
  // console.log("Logged in user role:", user.role);
  return res.redirect("/");
}


module.exports = {
  handleUserSignup,
  handleUserLogin,
};
