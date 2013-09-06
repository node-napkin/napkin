var shout = require('./lib/shout');

var me = new shout();
var you = new shout();

me.on('yell',function(a){
  console.log('yelling:',a);
});

you.on('yell',function(a){
  console.log('you are yelling:',a);
})

me.yell('whats going on');
you.yell('shutup');