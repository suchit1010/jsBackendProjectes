const sessionIdTouserMap = new Map();

function setUser(id, user) {
    sessionIdTouserMap.set(id, user);
}

function getUser(id) {
    return sessionIdTouserMap.get(id);  // Corrected to return the user
}


module.exports = {
    setUser,
    getUser,
}