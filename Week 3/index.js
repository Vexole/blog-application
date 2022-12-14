const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = new express();
app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/index.html"));
  // server rendering
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});
