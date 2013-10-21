/**
 Some relevant links along the way:

 https://github.com/joyent/node/issues/2809
 https://github.com/joyent/node/issues/877


 **/

var http = require('http')
  , async = require('async');

http.globalAgent.maxSockets = 200;

var options_npr = {
  host: 'www.npr.org',
  port: 80,
  path: '/MIT.txt',
  method: 'GET',
};

var options_node = {
  host:'localhost',
  port: 3000,
  path: '/hello',
  method: 'GET',
  //agent: false, // Note: if you disable agent, disable keep-alive too!
  //headers: {
  //  'Connection':'Keep-Alive'
  //}
};

var numReqs = 20;
var options = options_npr;
var orig_path = options.path; // we will be adding numbers to this to make it unique

var parallel = [];
for (var i=0; i<numReqs; i++) {
  parallel.push(function(callback){
    options.path = orig_path + '?num=' + i;
    console.time(options.path);
    console.time('data');
    http.request(options, function(response) {
      response.setEncoding('utf8');

      response.on('data', function (chunk) {
        //console.log(' BODY: ' + chunk);
        //console.log('...' + response.req.path);
        console.timeEnd('data');

      });

      response.on('error', function(err) {
        console.log(err);
      });

      response.on('end', function() {
        //console.log('response ended' + response.req.path);
//        console.timeEnd(response.req.path);
        callback(null);
      });
    }).end();
  });
}

console.time('start all');
async.parallel(parallel, function(err, results){
  console.timeEnd('start all');
});