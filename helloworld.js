var http = require('http');                             //this is a module (require)

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("Hello World! I'm Fernando Gonzalez.");
}).listen(8080);