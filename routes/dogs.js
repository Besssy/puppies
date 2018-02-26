const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/all', (req, res, next) => {
  models.dogs.find({}, (err, dogs) => {
    res.json(dogs);
  });
});

router.get('/breeds', (req, res, next) => {
  let breedList = [];
  models.breeds.find({}, (err, breeds) => {
    for (var breed of breeds) {
      let subBreedList = [];
      models.subBreeds.find({'breed._id':breed._id}, (err, subbreeds) => {
        for (var subbreed of subbreeds) {
          subBreedList.push(subbreed.name);
        }
        breedList.push({
          name: breed.name,
          subBreeds: subBreedList
        });
        res.json(breedList);
      });
    }
  });
});

router.post('/add/breed', (req, res, next) => {
  let name = req.body.name;
  models.breeds.create({name}, (err, breed) => {
    console.log(breed);
    if(err){
      console.log('den mpike');
      res.status(400).json({err});
    } else{
      res.status(200).json({status: 'OK'});
    }
  });
});

router.post('/add/:breed_name/subbreed', (req, res, next) => {
  let breed_name = req.params.breed_name;
  let subBreed_name = req.body.name;
  models.breeds.findOne({name: breed_name}, (err, breed) => {
    if(err){
      console.log('de vrika');
      res.status(500).json({err});
    } else{
      models.subBreeds.create({name: subBreed_name, breed}, (err, subbreed) => {
        if(err){
          console.log('den to vala');
          res.status(400).json({err});
        } else{
          res.status(200).json({status: 'OK'});
        }
      })
    }
  });
});

module.exports = router;
