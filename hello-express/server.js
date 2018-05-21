var express = require('express');
var app = express();
var port = 3000;
app.listen(port, function(){
    console.log('Basri-Express app listening on port ' + port);
});

app.get('/get', function(request, response){
    response.send('Basri says Hello, World!');
});