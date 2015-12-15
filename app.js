var mongoose = require('mongoose');
var express =require('express');
var routes = require('./routes');
mongoose.connect('mongodb://localhost',function(err){
  if(err) throw err;

var app = express(); //this creates an http server to serve our blog
routes(app);
  console.log('connected');
  //mongoose.disconnect();

  app.listen(3000,function(){
    console.log('now listening on http://localhost:3000');
  });
});
