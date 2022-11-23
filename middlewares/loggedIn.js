module.exports = (req, res, next) => {
  console.log("loggedIn", req.session.userId);
  isLoggedIn = req.session.userId;
  next();
};
