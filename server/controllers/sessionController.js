const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const verify = await Session.find({ cookieId: res.locals.ssid });
    if (verify.length) {
      return next();
    } else {
      res.redirect('/signup');
    }
  } catch (err) {
    // res.redirect('/signup');
    return next(err);
  }
};

sessionController.startSession = async (req, res, next) => {
  //write code here
  try {
    const verify = await Session.find({ cookieId: res.locals.ssid });
    if (!verify.length) {
      await Session.create({ cookieId: res.locals.ssid });
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = sessionController;
