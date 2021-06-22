// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

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
    for (var i = 0; i < params2.length; i++) {
        console.log(params2[i]);
    }
    var client = new twilio('ACfe485fc20f11da0bc9dba9ac534de18b', '6a3370003eec9c28572ef5ad3660bd93');
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

  // Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
// exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
// .onCreate((snap, context) => {
//   // Grab the current value of what was written to Firestore.
//   const original = snap.data().original;

//   // Access the parameter `{documentId}` with `context.params`
//   functions.logger.log('Uppercasing', context.params.documentId, original);
  
//   const uppercase = original.toUpperCase();
  
//   // You must return a Promise when performing asynchronous tasks inside a Functions such as
//   // writing to Firestore.
//   // Setting an 'uppercase' field in Firestore document returns a Promise.
//   return snap.ref.set({uppercase}, {merge: true});
// });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



// var bodyParser = require('body-parser');



// app.post('/sms', (req, res) => {

//     //make a script for get todays date, month
//     //make a script for get todays time

//     //   cronJob = require('cron').CronJob;
//     //   var textJob = new cronJob( '16 16 * * *', function(){

//     //   })

// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });

// exports.app = functions.https.onRequest(app);
