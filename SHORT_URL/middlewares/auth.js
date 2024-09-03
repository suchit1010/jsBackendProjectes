const { getUser } = require("../service/auth");

function checkAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token; // Corrected to 'req.headers' and 'authorization'
  req.user = null;

  if (!tokenCookie) {
    // console.log("No token found, redirecting to login.");
    return res.redirect("/login");
  }

  const user = getUser(tokenCookie); // Extract user details from the token

  if (!user) {
    // console.log("Invalid token, redirecting to login.");
    return res.redirect("/login");
  }

  req.user = user; // Attach the user object to the request
  // console.log("Authenticated user:", user); // Debugging: check what user object looks like
  next();
}

  

  function restrictTo(roles = []) {
    return function(req, res, next) {
      // console.log("User roles:", req.user?.role); // Debugging
  
      if (!req.user) {
        // console.log("No user found, redirecting to login");
        return res.redirect("/login");
      }
  
      if (!roles.includes(req.user.role)) { // Check user role
        // console.log("User not authorized:", req.user.role);
        return res.status(403).end("Unauthorized");
      }
  
      return next();
    };
  }
  
  
  
  

module.exports = {
  checkAuthentication,
  restrictTo
};
