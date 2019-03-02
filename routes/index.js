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



// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/student/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/student/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;
