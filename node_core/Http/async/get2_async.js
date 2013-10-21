var http = require('http');
var util = require('util');

var options_npr = {
  host: 'www.npr.org',
  port: 80,
  path: '/MIT.txt',
  method: 'GET',
};

var options_node = {
  host:'localhost',
  port: 8000,
  path: '/hello',
  method: 'GET',
  //agent: false
};

var N = 200;
var times = {};
var options = options_npr;
http.globalAgent.maxSockets = N;

for (var i = 0; i < N; i++) {
  (function(options, i) {
    options.path += '?num=' + i;
    var start = Date.now();
    var req = http.request(options, function(response) {
      response.on('data', function(chunk) {});
      response.on('error', console.error);
      response.on('end', function() {
        var t = Date.now() - start;
        var g = 10;
        var k = (t / g | 0) * g;
        (times[k] = times[k] || []).push(t);
      });
    });

    req.on('error', console.error);
    req.end();
  })(util._extend({}, options), i);
}

process.on('exit', function() {
  try{
    Object.keys(times).sort().forEach(function(key) {
      var t = (times[key].length / N) * 100 | 0;
      console.log('%s %d %d%%', key, times[key].length, t);
    });
  } catch(e) {
    console.log(e);
  }
});