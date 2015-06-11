var express = require('express');
var router = express.Router();
var calculate = require('../public/javascripts/app')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', });
});


router.post('/', function(req, res, next) {
  var button = req.body.button;
  var departure =req.body.departure;
  var arrival= req.body.arrival;
  var total = req.body.answer;
  var airPrice = 0;
  var bags = req.body.checkbags;
  var wifi = req.body.wifi;
  var addWifi = parseInt(wifi);
  var pickClass = req.body.class;
  var classChoice = parseInt(pickClass);
  var discountCode = req.body.discount;
  res.render('index', calculate.airfareTotal(departure));
});




module.exports = router;
