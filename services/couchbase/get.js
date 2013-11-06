/**
 * Assuming you have properly installed couchbase libs
 * and have a running server with sample data installed
 * @type {exports|*}
 */
var conf      = require('config')
  , couchbase = require('couchbase')
  , _         = require('underscore');

var N = 500;

var allDone = _.after(N, function(){
  console.timeEnd('all requests');
  process.exit(0);
})

console.time('all requests');
var bucket = new couchbase.Connection({
  bucket: conf.couchbase.bucket,
  host: conf.couchbase.host
}, function(err){
  if(err) {
    console.log(err);
  }
  (function(bucket){
//    console.time('get one');
    for(var i=0; i<N;i++) {
      bucket.get('21st_amendment_brewery_cafe',function(err, result){
//        console.timeEnd('get one');
        allDone();
      });
    }
  })(bucket);
});