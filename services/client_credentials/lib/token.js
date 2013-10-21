var request = require('request')
  , _       = require('underscore');


var Token = function(token) {
  this.token = token;
};

/**
 * Extension of the request.request function with all the same options
 * @param options
 * @param callback
 */
Token.prototype.request = function(options, callback) {

  if('headers' in options) {
    options.headers = _.extend(options.headers, this.headers());
  }

  request.request(options, callback);
}

/**
 * Headers set by /auth/access_token return
 * @returns {{Authorization: (join|*|string)}}
 */
Token.prototype.headers = function() {
  var headers = {
    'Authorization': [this.token.token_type, this.token.access_token].join(' ')
  }
  return headers;
}


module.exports = Token;