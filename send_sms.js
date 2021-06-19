


    var twilio = require('twilio');
    var client = new twilio('ACfe485fc20f11da0bc9dba9ac534de18b', '70177ea29ad3bce5927373cb9fae0c5c');
    client.messages.create({ 
      to: "YOUR_NUMBER",
      from: "+19402414167",
      body: "REMINDER_FORMAT",
    }, function(err, message) {
      console.log(message.sid);
    }); 
    