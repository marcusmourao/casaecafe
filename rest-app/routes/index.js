var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
  var userId = req.body.userId;
  request('http://ec2-35-164-139-210.us-west-2.compute.amazonaws.com/hirers/'+ userId+'/opportunities', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      var count = obj.length;
      console.log(count);
      res.send(count.toString());
    }
  })
});

module.exports = router;
