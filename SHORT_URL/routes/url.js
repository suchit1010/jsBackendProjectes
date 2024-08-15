const express = require('express');
const {handleGenerateNewShortURL } = require("../controllers/url");

const router = express();

router.post('/', handleGenerateNewShortURL);

module.exports = router;
