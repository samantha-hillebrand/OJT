const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const InternSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  status: {
    type: String,
  },
  graduatedPersevere: {
    type: String,
  },
  prisonReleas: {
    type: Date,
  },
  programStartDate: {
    type: Date,
  },
  banyanStartDate: {
    type: Date,
  },
  banyanEndDate: {
    type: Date,
  },
  dob: {
    type: Date,
  },
  telNumber: {
    type: String,
  },
  stateOfResidence: {
    type: String,
  },
  address: {
    type: String,
  },
  personalEmail: {
    type: String,
  },
  banyanEmail: {
    type: String,
  },
  caseManager: {
    type: String,
  },
  tes: {
    type: String,
  },
  workBuddy: {
    type: String,
  },
  rubric: {
    type: String,
  },
});

const Intern = mongoose.model("Intern", InternSchema);
module.exports = Intern;