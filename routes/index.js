var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4',
    message: 'It is about time for lunch'});
});

/* GET random page */
router.get('/random', function(req, res, next) {
  // generate random #
  var randomNumber = Math.random();

  // load the random view
  res.render('random', { title: 'Random Number',
    randomNumber: randomNumber });
});

module.exports = router;
