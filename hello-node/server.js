var http = require('http');
var port = 3000;

var requestHandler = function(request, response){
     console.log('Request came from: ' + request.url);
     response.end('Hello, World!.... BTW2222, the request came from: ' + request.url);
}

var server = http.createServer(requestHandler);

server.listen(port, function(){
     console.log('Listening on port ' + port);
});