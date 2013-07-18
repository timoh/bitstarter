var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(fs.readFileSync('index.html'));
  var index_html = buffer.toString();
  response.send(index_html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
