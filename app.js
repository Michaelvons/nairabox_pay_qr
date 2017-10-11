var express = require('express');
var app = express();
var routes = require('./api/routes');

// Define the port to run on
app.set('port', 3000);

// Add some routing
app.use('/api', routes);


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server running');
  console.log('Server running on port ' + port);
});