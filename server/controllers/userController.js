const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  // write code here
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    await User.create({ username: username, password: hash });
    return next();
  } catch (err) {
    res.render('./../client/signup', {
      error: 'Could not create user.',
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = await User.find({
      username: username,
      // password: password,
    });
    console.log(userData);

    const isVerified = await bcrypt.compare(password, userData.password);

    if (isVerified) {
      return next();
    }
    res.redirect('/signup'); // Did not send error message. Fix?
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
