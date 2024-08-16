const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
});

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;
