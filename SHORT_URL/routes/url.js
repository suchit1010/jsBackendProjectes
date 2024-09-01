const express = require('express');
const {handleGenerateNewShortURL, handlegetAnalitcs , handleGetUserURLs } = require("../controllers/url");

const router = express();

router.post('/', handleGenerateNewShortURL);

router.get("/analytics/:shortId", handlegetAnalitcs)


module.exports = router;
