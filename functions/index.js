// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();
const cors = require('cors');
var twilio = require('twilio');

admin.initializeApp();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original

  exports.sms = functions.https.onRequest(async (req, res) => {
    var params2 = req.query.variable2.split('//');
    var client = new twilio(accountSid, authToken);
    if (params2[1] > 0) {
        setTimeout(function () {
            client.messages.create({
                to: req.query.variable1,
                from: "+19402414167",
                body: params2[0],
            }, function (err, message) {
                console.log(message.sid);
            });
        }, "" + params2[1]);
    }
  });

  //add the validation function for twilio
  exports.validate = functions.https.onRequest(async (req, res) => {
    console.log(req.query.variable2, req.query.variable1);
    const client = require('twilio')('ACfe485fc20f11da0bc9dba9ac534de18b', '8d0bdc71722ecebe083355c6ef3e0bb1');
    client.validationRequests.create({friendlyName: '' +req.query.variable2, phoneNumber: '+' + req.query.variable1})
    .then(validation_request => console.log(validation_request.friendlyName));
  });

  