const mongoose = require('mongoose');

let dogPhotoSchema = new mongoose.Schema({
  url: String
});

mongoose.model('dogphotos', dogPhotoSchema);

module.exports = dogPhotoSchema;
