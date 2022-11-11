const mongoose = require('mongoose');
require('dotenv').config();
const MONGOURI = process.env.MONGOURI;
const db = "ojt-tracker";

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, data) => {
    if (err) {
      console.log('Database error: ' + err);
    } else {
      console.log('Successful database connection');
    }
  });