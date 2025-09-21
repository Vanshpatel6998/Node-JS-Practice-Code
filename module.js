var http = require('http');
var dt = require('./firstmodule');

http.createServer(function(req,res){
    res.write("The date and time are currently:" + dt.mydatetime());
    res.end();
}).listen(8080);