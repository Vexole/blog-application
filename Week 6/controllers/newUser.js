const User = require("../models/User");
const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
  try {
    await User.create({
      ...req.body,
    });
    const blogPosts = await BlogPost.find({ username: req.body.username });
    return res.render("index", { blogPosts });
  } catch (err) {
    console.log(err);
  }

  res.redirect("/register");
};
