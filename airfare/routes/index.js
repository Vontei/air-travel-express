var express = require('express');
var router = express.Router();
var calculate = require('../public/javascripts/app')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', });
});


router.post('/', function(req, res, next) {
  var departure =req.body.departure;
  var arrival= req.body.arrivals;
  var bags = req.body.bags_checked;
  var wifi = req.body.wifi;
  var pickClass = req.body.classChoice;
  var discountCode = req.body.discount_code;
  var answer = calculate.airfareTotal(departure,arrival, bags, wifi, pickClass, discountCode)
  res.render('index', {airfareTotal: answer})

});





module.exports = router;
