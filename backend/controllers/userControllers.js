const UserModel = require('../models/userModel')
const bcrypt = require('bcryptjs');
const passport = require('passport')

const signUp = (req, res, next) => {
    UserModel.findOne({ username: req.body.username }, (err, data) => {
      var hash = bcrypt.hashSync(req.body.password, 12)
      if (err) {
        console.log(err)
      } else if (data) {
        res.json({ message: "Username already exists" })
      } else {
        let person = new UserModel({
          username: req.body.username,
          password: hash
        })
        person.save((err, data) => {
          if (err) {
            console.log(err);
          } else {
            passport.authenticate('local', (err, user, info) => {
              if (err) throw err;
              if (!user) res.send('No user exists!');
              else {
                req.logIn(user, (err) => {
                  if (err) throw err;
                  res.status(200).json({
                    success: true,
                    redirectUrl: '/main',
                    user: req.user
                  });
                })
              }
            })(req, res, next)
          }
        })
      }
    })
  };
  function mainPage(req, res) {
    res.status(200).json({
      success: true,
      redirectUrl: '/',
      user: req.user
    })
  };
  const login = (req, res, next) => {
    console.log("req.body in the login", req.body);
    passport.authenticate('local', (err, user, info) => {
      console.log('user', user);
      if (err) throw err;
      if (!user) res.send('Please try again');
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.status(200).json({
            success: true,
            redirectUrl: '/main',
            user: req.user
          })
        })
      }
    })(req, res, next);
  };
  const changePassword = (req, res) => {
    console.log(req.body);
    if (req.body.newpassword == req.body.confirm) {
      var newhash = bcrypt.hashSync(req.body.newpassword, 12)
      console.log(newhash);
      UserModel.findOneAndUpdate({ username: req.body.username }, { password: newhash }, {
        new: true
      },
        (err, data, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log("data", data);
            req.logout()
            res.status(200).json({
              success: true,
              redirectUrl: '/'
            })
          }
        })
    }
  };
  const logout = (req, res) => {
    req.logout();
    res.status(200).json({
      success: true,
      redirectUrl: '/'
    })
  };
  module.exports = {
    signUp,
    mainPage,
    login,
    changePassword,
    logout
  }