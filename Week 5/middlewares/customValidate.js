const customValidate = (req, res, next) => {
  if (req.body.title && req.body.body && req.body.file) {
    next();
  } else {
    return res.redirect("/post/new");
  }
};

module.exports = customValidate;
