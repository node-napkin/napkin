var net   = require('net')
  , async = require('async');

var parallel = [];


for(var i=0; i<2; i++) {
  parallel.push(function(callback){
    console.time('client disconnected');
    console.time('client data');
    console.time('client connected');
    var client = net.connect({port: 3000, host:'localhost'},
      function() { //'connect' listener
//        console.log('client connected');
        console.timeEnd('client connected');
        client.write('GET /wait HTTP/1.0\r\n\r\n');
      });
    client.on('data', function(data) {
//      console.log(data.toString());
      console.timeEnd('client data');
      client.end();
    });
    client.on('end', function() {
      console.timeEnd('client disconnected');
      callback();
    });
  });
}


console.time('total clients');
async.parallel(parallel, function(err, results){
  console.timeEnd('total clients');
});