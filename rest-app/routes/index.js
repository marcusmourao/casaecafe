var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  request('http://ec2-35-164-139-210.us-west-2.compute.amazonaws.com/hirers/111222/opportunities', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(response); // Print the result.
    }
  })
});

module.exports = router;
