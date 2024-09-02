const { getUser } = require("../service/auth");

function checkAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token;
    req.user = null;
  
    if (!tokenCookie) {
      return next(); // If no token is present, continue without authentication
    }
  
    try {
      const user = getUser(tokenCookie); // Extract the user from the token
      req.user = user; // Attach the user object to the request
    } catch (error) {
      console.error("Token verification failed:", error);
      return res.redirect("/login"); // Redirect to login if token is invalid
    }
  
    return next();
  }

  function restrictTo(roles = []) {
    return function(req, res, next) {
    //   console.log("User roles:", req.user.role);
  
      if (!req.user) {
        // console.log("No user found, redirecting to login");
        return res.redirect("/login");
      }
  
      // Directly check against the string role
      if (!roles.includes(req.user.role)) {
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
