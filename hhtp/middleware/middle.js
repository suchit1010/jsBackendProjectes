const fs = require("fs");

function logReqRes(filename) {
    return (req,re,next) => {
        fs.appendFile(
            filename,
            `\n${Date.now()}:${req.ip} ${req.method}: ${re.path}\n`,
            (err,data) => {
                next(); 
            }
        );

    };
}

module.exports = {
    logReqRes,
}