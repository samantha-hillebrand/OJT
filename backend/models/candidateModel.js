const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  firstname:{
    type: String
  },
  lastname:{
    type: String
  },
  status_active:{
    type: String
  },
  status_not_active:{
    type: String
  },
  status_pending:{
    type: String
  },
  radio_one:{
    type: String
  },
  radio_two:{
    type: String
  },
  release:{
    type: Date
  },
  program:{
    type: Date
  },
  banyan:{
    type: Date
  },
  enddate:{
    type: Date
  },
  dob:{
    type: Date
  },
  number:{
    type: Number
  },
  state:{
    type: Number
  },
  address:{
    type: String
  },
  persemail:{
    type: String
  },
  banyanemail:{
    type: String
  },
  case:{
    type: String
  },
  tes:{
    type: String
  },
  workbuddy:{
    type: String
  },
  rubric:{
    type: String
  }

});
const CandidateModel = mongoose.model("login", CandidateSchema);
module.exports = CandidateModel;