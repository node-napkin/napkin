

process.on('uncaughtException', function(e){
  console.error(e);
  console.log('error');
});

console.log('about to do something bad');
null.idonotexist();

console.log('ignored');