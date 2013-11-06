var https = require('https');

var Client = function(client_id, client_secret) {
  this.client_id = client_id;
  this.client_secret = client_secret;
};

Client.prototype.get_token = function(callback) {

  var options = {
    hostname: 'api.twitter.com',
    port: 443,
    path: '/oauth2/token',
    method: 'POST',
    headers: {
      'Authorization': this.hash()
    }
  };

  console.log(options);

  var req = https.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data', function(d){
      console.log(d);
    });
  });

  req.end('grant_type=client_credentials');

  req.on('end', function(){
    console.log('end');
  })

  req.on('error', function(e) {
    console.error(e);
  });
};

Client.prototype.hash = function() {
  return 'Basic ' + (new Buffer(this.client_id + ':' + this.client_secret).toString('base64'));
};

module.exports = Client;