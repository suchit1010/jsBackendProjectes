const jwt = require("jsonwebtoken");
const secret = "Shre@1010";

function setUser(user) {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },
        secret // Optional: Set token to expire in 1 hour
    );
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null; // Return null if token is invalid or expired
    }
}

module.exports = {
    setUser,
    getUser,
};
