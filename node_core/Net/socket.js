var Socket   = require('net').Stream
  , async    = require('async')
  , Jackpot  = require('jackpot')
  , util     = require('util');

console.time('total clients');
var parallel = [];



var http2 = function() {
  this.connections = {};

  this.poolSize=10;            // maximal parallel connections
  this.retries=5;              // Connection pool retries to pull connection from pool
  this.factor=1;               // Connection pool retry exponential backoff factor
  this.minTimeout=10;        // Connection pool retry min delay before retrying
  this.maxTimeout=60000;       // Connection pool retry max delay before retrying
  this.randomize=false;        // Connection pool retry timeout randomization
};

http2.prototype.connect = function(options, callback) {

  var server = options.host + ':' + options.port;
  if(server in this.connections) {
    return this.connections[server].pull(callback);
  }

  var sid = 0
    , manager;

  manager = new Jackpot(this.poolSize);

  manager.retries = this.retries;
  manager.factor = this.factor;
  manager.min = this.minTimeout;
  manager.max = this.maxTimeout;
  manager.randomize = this.randomize;

  manager.setMaxListeners(0);

  manager.factory(function() {
    var S = new Socket
      , Manager = this;

    S.streamID = sid++;
    S.setTimeout(5000);
    S.setNoDelay(true);
    S.setEncoding('utf8');
    S.setKeepAlive(true);
    S.callback;

    console.time('client disconnected');
//    console.time('client data');
//    console.time('client connected');
    console.time('connect ' + S.streamID);
    console.time('close ' + S.streamID);
    console.time('data ' + S.streamID);
    console.time('end ' + S.streamID);
    S.on('connect', function(){
      console.timeEnd('connect ' + S.streamID);
      this.on('error', function(err) {
        console.log(err);
      });
    });

    S.on('close', function() {
      console.timeEnd('close ' + S.streamID);
      Manager.remove(this);
    })

    S.on('data', function(data){
      console.log(data);
      console.timeEnd('data ' + S.streamID);
      S.callback();
      S.end();
    });

    S.on('end', function(){
      console.timeEnd('end ' + S.streamID);
      S.end();
    });
    S.connect(options.port, options.host);
    return S;
  });

  manager.on('error', function err(e) {
    console.log('Connection error', e);
  });

  this.connections[server] = manager;

  this.connections[server].pull(callback);
};

http2.prototype.get = function(options, callback) {
  this.connect(options, function(err, S) {
    S.callback = callback;
    S.write('GET /loadbalancer HTTP/1.0\r\n');
    S.write('Connection: keep-alive\r\n\r\n');
  });
}

var request = new http2();

for(var i=0; i<100; i++) {
  parallel.push(function(callback){
    request.get({
      host: 'api-sandbox.pmp.io',
      port: 80
    }, callback);
  });
}


async.parallel(parallel, function(err, results){
  console.timeEnd('total clients');
});