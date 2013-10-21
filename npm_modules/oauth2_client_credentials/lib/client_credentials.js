var _   = require('underscore')
  , request = require('request');

var ClientCredentials = function(options) {
  this.credentials = _.pick(options, ['client_id', 'client_secret']);
  this.scheme       = options.scheme || 'Basic';

  this.token;
};

ClientCredentials.prototype.get_token = function(callback) {
  console.log(this.hash());
  var options = {
      headers: {
        "Authorization": this.hash(),
        "Content-Type":"application/x-www-form-urlencoded"
      },
      url: 'http://jnelson.pmpdev.org:3000/auth/access_token'
    };

  request.post(options, function(err, resp, body){
    if(err) {
      console.log(err);
    }
    console.log(body);
    this.token = body;
    callback(err, resp);
  });
};

ClientCredentials.prototype.hash = function() {
  return this.scheme + ' ' + (new Buffer(this.credentials.client_id + ':' + this.credentials.client_secret).toString('base64'));
};


module.exports = ClientCredentials;