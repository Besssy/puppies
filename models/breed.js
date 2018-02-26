const mongoose = require('mongoose');

let breedSchema = new mongoose.Schema({
  name: String
});

mongoose.model('breeds', breedSchema);

module.exports = breedSchema;
