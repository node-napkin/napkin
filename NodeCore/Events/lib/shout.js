var events = require('events')
  , util = require('util');

function Shout() {
  events.EventEmitter.call(this);
}

util.inherits(Shout, events.EventEmitter);

Shout.prototype.yell = function(speak) {
  var self = this;
  setTimeout(function(){
    self.emit('yell',speak);
    self.emit('end');
  },1000);
  this.emit('yell', speak);
}

module.exports = Shout;