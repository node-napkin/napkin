var http = require('http');

var controller = {};

controller.get = function(req, res) {
  res.send(200, http.STATUS_CODES[200]);
};

controller.crumple = function(req, res) {
  res.send(204, http.STATUS_CODES[204]);
};

exports = module.exports = function(config) {
  return controller;
};