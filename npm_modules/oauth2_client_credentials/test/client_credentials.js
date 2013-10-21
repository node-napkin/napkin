var should = require('should')
  , CONF = require('config');

var ClientCredentials = require('../');


describe('client_credentials', function(){
  describe('constructor', function(){
    it('should construct a new client credentials object', function(){
      var client_credentials = new ClientCredentials({'client_id':'client_id', client_secret: 'client_secret'});
      console.log(client_credentials);
      client_credentials.credentials.client_id.should.equal('client_id');
      client_credentials.credentials.client_secret.should.equal('client_secret');
    });
  });

  describe('get_token', function(){
    it('should get a new token', function(done){
      var client = new ClientCredentials(CONF.credentials);
      client.get_token(function(){
        done();
      });
    })
  });
});