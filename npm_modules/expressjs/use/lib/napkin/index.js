var express = require('express');

var controller = require('./controller')({});

app = exports = module.exports = express();

app.get('/:id', controller.get);
app.del('/:id', controller.crumple);
