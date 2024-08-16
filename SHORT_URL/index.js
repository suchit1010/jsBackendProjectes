const express = require("express");
const { connectToMongoDB } = require("./connection");
const URL = require('./models/url'); 
const urlRoute = require("./routes/url");
const app = express();
const Port = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-Url")
    .then(() => console.log('MongoDb connected'));

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        }, 
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(), // Corrected to directly push Date.now()
                },
            },
        },
        { new: true }
    );

    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).json({ error: "Short URL not found" });
    }
});

app.use(express.json());

app.use('/url', urlRoute);

app.listen(Port, () => console.log(`Server started at Port: ${Port}`));
