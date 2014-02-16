var _ = require('highland')
  , fs = require('fs');

console.log('*********************');
console.log('Each with Log');
console.log('*********************');

_([1, 2, 3, 4]).each(_.log);

console.log('*********************');
console.log('Wrap Callback Example');
console.log('*********************');

var readFile = _.wrapCallback(fs.readFile);

var something = readFile('files/test1').map(function(x) {
  return {name: x};
});

something.each(function(n) {
  console.log(n);
});