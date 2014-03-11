var express = require('express');

var app = express();

var home = require('home');

app.get('/', home.get);

app.listen(3000);