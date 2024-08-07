const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const indexRouter = require("./routes/indexRouter");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  const { message } = err;
  const debugOnly = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error", { message: message, error: debugOnly });
});

app.listen(port, () => {
  console.log(`Currently listening on port ${port}`);
});
