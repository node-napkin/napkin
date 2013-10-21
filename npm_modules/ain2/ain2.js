var SysLogger = require('ain2')
  , util      = require('util');
var options = {
  facility: 'local0',
  tag: 'asdf'
}
var console = new SysLogger(options);

//console.('notice: %d', Date.now());
//console.info('info');
console.error(util.format.apply(null, [Date.now()]));
//console.notice('asdf');
//console.error();