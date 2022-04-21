const User = require('../models/userModel');

const cookieController = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    const userData = await User.find({
      username: req.body.username,
    });
    if (userData.length) {
      res.cookie('ssid', userData[0]._id, {
        maxAge: 36000,
        secure: true,
        httpOnly: true,
      });
      res.locals.ssid = userData[0]._id;
      return next();
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = cookieController;
