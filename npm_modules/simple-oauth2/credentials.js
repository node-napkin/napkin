// Get the access token object.
var token;
var credentials = {
  clientID: 'd2dfb333-8421-44da-9239-5fb0b59289ef',
  clientSecret: '85cec293144f39a61c5c0ec9',
  site: 'https://api-sandbox.pmp.io'
};

// Initialize the OAuth2 Library
var OAuth2 = require('simple-oauth2')(credentials);

console.log(OAuth2.Client);

// Get the access token object for the client
OAuth2.Client.getToken(saveToken);

// Save the access token
function saveToken(error, result) {
  if (error) { console.log('Access Token Error', error.message); }
  token = OAuth2.AccessToken.create(result);
};