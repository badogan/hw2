var http = require('http');
var port = 3000;

var requestHandler = function(request, response){
     console.log('Request came from: ' + request.url);
     response.end('Hello, World!');
}

var server = http.createServer(requestHandler);

server.listen(port, function(){
     console.log('Listening on port ' + port);
});