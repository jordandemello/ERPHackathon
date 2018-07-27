const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const UserModel = require('./models/signature.js')
const app = express();
const url = 'mongodb://jordan:admin1234@ds253871.mlab.com:53871/erp-hackathon';

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
});
//==========================//
//====GET ALL USERS===//
app.get('/api/users', function(req, res) {
  UserModel.find({}).then(eachOne => {
    res.json(eachOne);
  })
})
//==========================//

//====GET ALL GROUPS===//
app.get('/api/groups', function(req, res) {
  UserModel.find({}, 'groupName').then(eachOne => {
    res.json(eachOne);
  })
})
//==========================//

//====GET ALL USERS FOR A GROUP===//
app.get('/api/groupUsers', function(req, res) {
  UserModel.find({groupName : req.body.groupName}).then(eachOne => {
    res.json(eachOne);
  })
})
//==========================//

//====POST NEW USER===//
app.post('/api/users', function(req, res) {
  UserModel.create({
    firstName: req.body.FirstName,
    lastName: req.body.LastName,
    isCorporate: req.body.IsCorporate,
    groupName: req.body.GroupName,
    groupPosition: req.body.GroupPosition,
    totalDistance: req.body.TotalDistance,
  }).then(user => {
    res.json(user)
  });
});
//==========================//

//====UPDATE DISTANCE FOR USER===//
app.post('/api/users', function(req, res) {
  UserModel.create({
    firstName: req.body.FirstName,
    lastName: req.body.LastName,
    isCorporate: req.body.IsCorporate,
    groupName: req.body.GroupName,
    groupPosition: req.body.GroupPosition,
    totalDistance: req.body.TotalDistance,
  }).then(user => {
    res.json(user)
  });
});
//==========================//

//====DELETE USER===//
app.post('/api/users', function(req, res) {
  UserModel.create({
    firstName: req.body.FirstName,
    lastName: req.body.LastName,
    isCorporate: req.body.IsCorporate,
    groupName: req.body.GroupName,
    groupPosition: req.body.GroupPosition,
    totalDistance: req.body.TotalDistance,
  }).then(user => {
    res.json(user)
  });
});
//==========================//

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//
