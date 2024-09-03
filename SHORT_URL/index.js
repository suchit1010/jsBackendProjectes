const express = require("express");
const path = require("path");
const { connectToMongoDB } = require("./connection");
const { checkAuthentication, restrictTo } = require("./middlewares/auth");
const cookieParser = require("cookie-parser");
const URL = require("./models/url");


const app = express();
const Port = 8001;

//imported routes
const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRoute');
const userRoute = require('./routes/user');

connectToMongoDB("mongodb://127.0.0.1:27017/short-Url").then(() =>
  console.log("MongoDb connected")
);

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(checkAuthentication);


app.use("/url",restrictTo(["NORMAL","ADMIN"]), urlRoute);
app.use("/", staticRoute);
app.use('/user',  userRoute);


app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));



app.get("/:shortId", async (req, res) => {
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




app.listen(Port, () => console.log(`Server started at Port: ${Port}`));
