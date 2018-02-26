const express = require('express');
const router = express.Router();
const models = require('../models');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.json({username: req.body.username});
});

router.post('/register', (req, res, next) => {
  let temp_user = {
    username: req.body.username,
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  };
  models.users.register(temp_user, req.body.password, (err, user) => {
    if(err){
      console.log('den grafikes kale');
      res.status(400).json({err});
    } else{
      console.log('graftikes');
      res.status(200).json({user});
    }
  });
});

router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/facebook/success', passport.authorize('facebook'), (req, res, next) => {
  let user = req.account;
  if(user){
    res.status(200).json(user);
  } else {
    console.log('den grafikes kale');
    res.status(400).json({err: 'error'});
  }
});

module.exports = router;
