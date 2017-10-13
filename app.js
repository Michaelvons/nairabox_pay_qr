var express = require('express');
var app = express();
var routes = require('./api/routes');
var path = require('path');

// Define the port to run on
app.set('port', 3000);

// Add some routing
app.use('/api', routes);

//Static files
// app.use(express.static(__dirname + '/api/assets/'));

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

/* console.log(__dirname); */


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server running');
  console.log('Server running on port ' + port);
});