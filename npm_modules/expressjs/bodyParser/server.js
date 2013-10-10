var express = require('express');
var app = express();


app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/wait', function(req, res){
  console.log('request');
  setTimeout(function(){
    res.send(200);
  },1000);
});

app.post('/', function(req, res){
  console.log(req.body);
  res.send(200);
});

app.listen(3000);