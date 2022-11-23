const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
  const blogPosts = await BlogPost.find({}).populate("userId");
  res.render("index", { blogPosts });
};
