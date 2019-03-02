var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./user');

// CREATES A NEW USER
router.post('/form', function (req, res) {
    User.create({
            contractNo : req.body.contractNo,
            engineNo : req.body.engineNo,
            mfg : req.body.mfg,
            basePrice : req.body.basePrice,
            engine : req.body.engine,
            suspension : req.body.suspension,
            steering : req.body.steering,
            brakes : req.body.brakes,
            transmission : req.body.transmission,
            rating : req.body.rating
          },
        function (err, basePrice) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(basePrice);
        });


});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/data', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});


router.get('/:contractNo', function(req, res) {
    User.find({}, function(err,data){
      if(err){
        console.log(err);
      }else{
        console.log(req.params.contractNo);
        js = req.params.contractNo !== undefined ? data.filter(function(obj) {return obj.contractNo== req.params.contractNo}): data;
        res.send(js);
      }
    })
  });


module.exports = router;
