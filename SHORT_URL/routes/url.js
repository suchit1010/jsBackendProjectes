const express = require('express');
const {handleGenerateNewShortURL, handlegetAnalitcs } = require("../controllers/url");

const router = express();

router.post('/', handleGenerateNewShortURL);

router.get("/analytics/:shortId", handlegetAnalitcs)

module.exports = router;
