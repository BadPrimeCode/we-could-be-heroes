var express = require('express');
var router = express.Router();

// require heroes model
var Hero = require('../public/assets/models/hero');

// gets all the heroes
router.get('/', function(req, res) {
  console.log('getting heroes');
  Hero.find({}, function(err, heroResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(heroResults);
    }
  }); //end of find
}); //end of router get

// get power name
router.get('/enum', function(req, res) {
  res.send(Hero.schema.path('power_name').enumValues);
});

// add new hero process
router.post('/', function(req, res) {
  console.log('in hero add');
  console.log('added hero: ', req.body);

  var hero = req.body;

// create new
  var newHero = new Hero({
    alias: hero.alias,
    first_name: hero.first_name,
    last_name: hero.last_name,
    city: hero.city,
    power_name: hero.power_name
  });

// save new
  newHero.save(function(err) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.sendStatus(201);
    }
  }); //end of new hero
}); //end of router post

// delete individual hero
router.delete('/:id', function(req, res) {
    Hero.remove({'_id': req.params.id}, function(err) {
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500);
      }else{
        console.log('removed hero: ', req.params);
        res.sendStatus(200);
      }
    });
});

module.exports = router;
