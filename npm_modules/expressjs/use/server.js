var express = require('express');
var app = express();

app.use('/napkin', require('./lib/napkin'));

app.listen(3000);