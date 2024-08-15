const shortid = require('shortid');

async function handleGenerateNewShortURL(req,res) {
    const body = req.body;
    if(!body.utl) return res.status(400).json({ error: "url is required"});
    const shortID = shortid();

    await URL.create({
     shortId: shortID,
     redirectURL: body.url,
     visitHistory: [],
      
    });

    return req.json({ id: shortID });

}

module.exports = {
    handleGenerateNewShortURL,
}