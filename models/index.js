const config = require('../config').db;
const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

let dbURL = 'mongodb://' + config.host + ':' + config.port + '/' +config.database;
let db = mongoose.createConnection(dbURL);

db.on('connected', () => {
  console.log('Connection on: ' + dbURL);
});
db.on('error', err => {
  console.log(err);
});

require('./dogs');
require('./breed');
require('./subbreed');
require('./dogPhotos');
require('./users');
module.exports = {
  dogs: db.model('dogs'),
  breeds: db.model('breeds'),
  subBreeds: db.model('subbreeds'),
  photos: db.model('dogphotos'),
  users: db.model('users')
};
