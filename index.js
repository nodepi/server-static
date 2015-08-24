var http = require('http'),
    serveStatic = require('serve-static');

var serve = serveStatic('../nodepi.github.io');

var server = http.createServer(function(req, res){
	var done = function(){}
	serve(req,res, done);
});


server.listen(8080);
