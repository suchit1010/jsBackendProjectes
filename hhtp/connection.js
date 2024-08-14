const mongoose = require("mongoose");

const connectMongodb = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log("Mongo Error", err));
};

module.exports = { connectMongodb };
