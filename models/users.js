const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local-mongoose');

let usersSchema = new mongoose.Schema({
  providers: {facebook: String, linkedin: String},
  username: String,
  email: String,
  firstname: String,
  lastname: String
});

usersSchema.plugin(passportLocal);
mongoose.model('users', usersSchema);

module.exports = usersSchema;
