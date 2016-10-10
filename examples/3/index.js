var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Example 3');
});

app.listen(3000, function() {
  console.log('Running Example 3 on port 3000');
});
