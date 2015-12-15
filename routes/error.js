modules.exports = function(app){
  //404s
  app.use(function(req,res,next){
    res.status(404);
    if(req.accepts('html')){
      return res.send("<h2>I'm sorry, I couldn't find that page.</h2>");
    }
    if(req.accepts('json')){
      return res.json({error:"not found"});
    }
    res.type('txt');
    res.send('hmmm,couldnt find that page.')
  })
}
