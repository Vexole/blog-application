const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
const fileUpload = require("express-fileupload");
const customValidate = require("./middlewares/customValidate");

const app = new express();
app.use(fileUpload());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/post/save", customValidate);
app.set("view engine", "ejs");
mongoose.connect(
  "mongodb+srv://bshrestha:03Md5BsmF2IiCGO9@cluster0.fm67amd.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});

app.get("/", async (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/index.html"));
  // server rendering

  const blogPosts = await BlogPost.find({});
  res.render("index", { blogPosts });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post/new", (req, res) => {
  res.render("create");
});

app.get("/post/:id", async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);
  res.render("post", { blogPost });
});

app.post("/post/save", async (req, res) => {
  try {
    let image = req.files.image;
    image.mv(
      path.resolve(__dirname, "public/img", image.name),
      async (error) => {
        await BlogPost.create({
          ...req.body,
          username: "B. Shrestha",
          image: `/img/${image.name}`,
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});
