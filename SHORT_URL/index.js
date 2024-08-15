const express = require("express");
const urlRoute = require("./routes/url");
const app = express();
const Port = 8001;

app.use('/url', urlRoute);

app.listen(Port,() => console.log(`server started at Port: ${Port} `));