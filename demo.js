var express = require('express');

var app = express();
app.use(express.static('demo'))

var port = 3000;
app.listen(port);
console.log('Listening on port ' + port);
