const express = require('express');
const cors = require('cors');
require('dotenv').config();
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express();
require('./backend/config/config')
const UserModel = require('./backend/models/userModel')
const userRoutes = require('./backend/routes/userRoutes')
const helmet = require('helmet')
const LocalStrategy = require('passport-local')
const { ObjectID } = require("mongodb")


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(cookieParser('process.env.SESSION_SECRET'));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));



// passport.serializeUser((user, done) => {
//   done(null, user._id)
// });
// passport.deserializeUser((id, done) => {
//   UserModel.findOne({ _id: new ObjectID(id) },
//     (err, doc) => {
//       done(null, doc)
//     }
//   )
// });
// passport.use(new LocalStrategy(
//   function (username, password, done) {
//     UserModel.findOne({ username: username }, function (err, user) {
//       console.log('User ' + username + ' attempted to log in.');
//       if (err) throw err;
//       if (!user) { return done(null, false) }

//       bcrypt.compare(password, user.password, (err, result) => {
//         if (err) throw err;
//         if (result == true) {
//           return done(null, user)
//         } else {
//           return done(null, false)
//         }
//       })
//     });
//   }
// ));

app.use('/', userRoutes)

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;