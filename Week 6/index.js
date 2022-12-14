const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const customValidate = require("./middlewares/customValidate");
const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const getPostController = require("./controllers/getPost");
const storePostController = require("./controllers/storePost");
const newUserController = require("./controllers/newUser");
const registerUserController = require("./controllers/registerUser");

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

app.get("/", homeController);

app.get("/post/new", newPostController);

app.get("/post/:id", getPostController);

app.post("/post/save", storePostController);

app.get("/register", registerUserController); 
app.post("/user/save", newUserController);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
