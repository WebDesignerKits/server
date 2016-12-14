var static = require('node-static');
var http = require('http');
var port = process.argv[2]; // pass in the port as an argument
// example node server 8080;

var file = new(static.Server)();

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);

console.log("Listening on: http://localhost:"+port);
