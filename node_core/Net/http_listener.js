var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log('is master');
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  console.log('I am worker #' + cluster.worker.id);
  var express = require('express');
  var app = express();

  app.get('/wait', function(req, res){
    console.log(cluster.worker.id, 'request accepted');
    res.send(200);
  });

  app.listen(3000);
}