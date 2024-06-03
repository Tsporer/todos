const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const app = express();
const path = require("path");
const moment = require("moment");

// Live Reload configuration
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Fontend route
const FrontRouter = require("./routes/front");

// Set ejs template engine
app.set("view engine", "ejs");

app.use(connectLiveReload());

app.use(bodyParse.urlencoded({ extended: false }));
app.locals.moment = moment;

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

// Database connection
const db = require("./config/keys").mongoProdURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Mongodb Connected`))
  .catch((error) => console.log(error));

app.use(FrontRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
