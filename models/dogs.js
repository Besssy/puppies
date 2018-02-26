const mongoose = require('mongoose');
const breed = require('./breed');
const subBreed = require('./subbreed');
const dogPhotos = require('./dogPhotos');

let dogSchema = new mongoose.Schema({
  name: String,
  birthdate: Date,
  owner: String,
  address: {
    long: Number,
    lang: Number
  },
  breed,
  subBreed,
  photos: [dogPhotos]
});

mongoose.model('dogs', dogSchema);

module.exports = dogSchema;
