const sendMessage = require('./client.js');


function initialize() {
    fs.readFile('./settings.conf', 'utf8', function (err, data) {
      var config = JSON.parse(data);


    });
  }
  