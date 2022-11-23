const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ username });
  if (user) {
    const isSame = bcrypt.compare(password, user.password);
    console.log('isSame ', isSame);

    if (isSame) {
      req.session.userId = user._id;
      console.log('isSame ', req.session.userId);
      console.log('isSame ', user._id);
      console.log('user ', user);

      res.redirect('/');
    } else {
      res.redirect('/auth/login');
    }
  } else {
    res.redirect('/auth/login');
  }
};
