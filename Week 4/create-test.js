const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
  "mongodb+srv://bshrestha:03Md5BsmF2IiCGO9@cluster0.fm67amd.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

BlogPost.create(
  {
    title: "First Blog",
    body: "Testing CRUD application for the first time.",
    username: "B. Shrestha",
  },
  (error, blogPost) => {
    if (error) {
      console.log(error);
    }
    console.log(blogPost);
  }
);
