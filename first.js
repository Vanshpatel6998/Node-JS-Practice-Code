var http = require('http');

http.createServer(function(req,res){
    res.end('This is my first node application!!!');
}).listen(8080);

// console.log("vansh");