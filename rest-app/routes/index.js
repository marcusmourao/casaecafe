var express = require('express');
var router = express.Router();
var request = require('request');
var data = {
  "id": 1305951,
  "title":"Vaga para Empregada Domstica",
  "description":"Casal sem filhos e sem animais domsticos  procura empregada",
  "created_at":"2016-07-01 13:06:12",
  "is_contact_available":true,
  "is_active":true,
  "hirer":{
    "id": 130595,
    "name":"Marcus Marangon Mourão",
    "account_type":"pf",
    "cnpj":null,
    "company_contact_name":null,
    "phone":"(21) 99870-0327",
    "email":"felipe_med@yahoo.com.br",
    "mobile_phone":"(21) 93234-8378",
    "is_plan_active":true
  },
  "location":{
    "neighborhood":"Ipanema",
    "address":"Prudente de Morais",
    "address_type":"Rua",
    "latitude":-22.9851707,
    "longitude":-43.2071601,
    "city_id":"6861",
    "city":"Rio de Janeiro",
    "zipcode":"22420043",
    "state":"RJ"
  },
  "frequency":"mensalista_2x",
  "is_automatic":false,
  "score":3,
  "category":{
    "id":1,
    "name":"Empregada Domstica"
  },
  "salary_requirements":1100,
  "characteristics":[

  ],
  "starts":"esse_mes",
  "amount_candidates":19,
  "amount_visualizations":58,
  "feedback":"",
  "salary_research":"",
  "relevancy":""
};
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
  request.post({url:'http://ec2-35-164-223-211.us-west-2.compute.amazonaws.com/opportunities', json: true, headers: {"content-type": "application/json"}, body: data}, function(err,httpResponse,body){
    /* ... */
    console.log("entrou aqui");
    console.log(body);
  })
});
module.exports = router;
