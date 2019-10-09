var http = require('http');
var dt = require('./myfirstmodule.js');                 //Export the file 

http.createServer(function(req, res){                   //Create the server 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently:" + "<br/>" + dt.myDateTime());      //Write to the page
    res.end();
}).listen(8080);                    //Expose 8080 port 