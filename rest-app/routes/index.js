var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function (req, res, next) {
  var userId = req.body.userId;
  request('http://ec2-35-164-223-211.us-west-2.compute.amazonaws.com/hirers/'+ userId+'/opportunities', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      var count = obj.length;
      console.log(count);
      res.send(count.toString());
    }
  })
});

router.get( '/create', function (req, res, next) {
  res.render('form')

});
router.post('/send', function (req, res, next) {
  // First Get all Parameters from form
  var id = req.body.id;
  var title = req.body.title;
  var description = req.body.description;
  var created_at = req.body.created_at;
  var is_contact_available = req.body.is_contact_available;
  var is_active = req.body.is_active;
  var idHirer = req.body.idHirer;
  var nameHirer = req.body.nameHirer;
  var account_type = req. body.account_type;
  var cnpj = req.body.cnpj;
  var company_contact_name = req.body.company_contact_name;
  var phone = req.body.phone;
  var email = req.body.email;
  var mobile_phone = req.body.mobile_phone;
  var is_plan_active = req.body.is_plan_active;
  var neighborhood = req.body.neighborhood;
  var address = req.body.address;
  var address_type = req.body.address_type;
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  var city_id = req.body.city_id;
  var city = req.body.city;
  var zipcode = req.body.zipcode;
  var state = req.body.state;
  var frequency = req.body.frequency;
  var is_automatic = req.body.is_automatic;
  var score = req.body.score;
  var category_id = req.body.category_id;
  var category_name = req.body.category_name;
  var salary_requirements = req.body.salary_requirements;
  var characteristics = req.body.characteristics;
  var starts = req.body.starts;
  var amount_candidates = req.body.amount_candidates;
  var amount_visualizations = req.body.amount_visualizations;
  var feedback = req.body.feedback;
  var salary_research = req.body.salary_research;
  var relevancy = req.body.relevancy;

  // Second Create a Json with require format
  var data = {
    "id": parseInt(id),
    "title": title,
    "description": description,
    "created_at": "2016-07-01 13:06:12",
    "is_contact_available": is_contact_available ,
    "is_active": true,
    "hirer":{
      "id": parseInt(idHirer),
      "name": nameHirer,
      "account_type": account_type,
      "cnpj": cnpj,
      "company_contact_name": company_contact_name,
      "phone": phone,
      "email": email,
      "mobile_phone": mobile_phone,
      "is_plan_active": true
    },
    "location":{
      "neighborhood": neighborhood,
      "address": address,
      "address_type": address_type,
      "latitude": latitude,
      "longitude": longitude,
      "city_id": city_id,
      "city": city,
      "zipcode": zipcode,
      "state": state
    },
    "frequency": frequency,
    "is_automatic": is_automatic,
    "score":score,
    "category":{
      "id":category_id,
      "name": category_name
    },
    "salary_requirements": salary_requirements,
    "characteristics":[
      characteristics
    ],
    "starts": starts,
    "amount_candidates": amount_candidates,
    "amount_visualizations":amount_visualizations,
    "feedback": feedback,
    "salary_research": salary_research,
    "relevancy": relevancy
  };



  request.post({url:'http://ec2-35-164-223-211.us-west-2.compute.amazonaws.com/opportunities', json: true, headers: {"content-type": "application/json"}, body: data}, function(err,httpResponse,body){
    console.log(body);
    console.log(httpResponse.statusCode);
    res.send(body);
  })
});
module.exports = router;
