var http = require('http');
var na = require('./task1module');

http.createServer(function(req,res){
    res.write(na.name());
    res.end();
}).listen(8080);