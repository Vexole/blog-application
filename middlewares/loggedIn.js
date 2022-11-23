module.exports = (req, res, next) => {
  console.log(req.session.userId);
  isLoggedIn = req.session.userId;
  next();
};
