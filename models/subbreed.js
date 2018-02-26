const mongoose = require('mongoose');
const breed = require('./breed');

let subBreedSchema = new mongoose.Schema({
  name: String,
  breed
});

mongoose.model('subbreeds', subBreedSchema);

module.exports = subBreedSchema;
