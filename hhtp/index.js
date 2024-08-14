const express = require("express");
const { connectMongodb } = require("./connection");

const {logReqRes} = require("./middleware/middle")
const userRouter = require("./routes/user");
const app = express();


// C\onnection
connectMongodb("mongodb://127.0.0.1:27017/testDb").then(() => 
    console.log("Mongodb Connected")
); 

 // Should log "function"

//Middleware _ Plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

// Routers
app.use("/api/users", userRouter);
// Start the server
app.listen(3030, () => console.log("Server is running on 3030"));
