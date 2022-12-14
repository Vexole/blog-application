const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect(
  "mongodb+srv://bshrestha:03Md5BsmF2IiCGO9@cluster0.fm67amd.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

BlogPost.find({}, (error, blogPost) => {
  if (error) {
    console.log(error);
  }
  console.log(blogPost);
});
