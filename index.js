//index.js

// Dependencies - general
var express = require('express');
var cn =  {
  serverPort: 3000
};

// Express
var app = express();
app.disabled('x-powered-by');

app.use(express.static( __dirname + '/public'));

// Run
app.listen(cn.serverPort, function() {
  console.log('Server running on localhost:' + cn.serverPort);
});
