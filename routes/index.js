const express = require('express');
const router = express.Router();

// router.get('/', (req, res, next) => {
//   // res.json({message: 'geiaaa'});
//   res.sendFile(__dirname + '/../public/index.html');
// });

const dogs = require('./dogs');
const authentication = require('./authentication');
module.exports = {
  index: router,
  dogs,
  authentication
};
