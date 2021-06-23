var express = requier('express');
var router = express.Router();

router.get('/', function(req,res){
  res.render('index',{title:'judul'});
});

router.get('/healthcheck',function(req,res){
  var responseObject={message:'ok'};
});

router.get('/ilike/:eskrim/:name', function(req,res){
  var choice = req.params.eskrim;
  var name = req.params.name;
  car responObject = {message:'hey'+name+'ilike'+choice+'too!'};
  res.send(responObjecy);
});

module.exports = router;
