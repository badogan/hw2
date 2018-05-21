var express = require('express');
var app = express();
var port = 3000;
app.listen(port, function(){
    console.log('Basri-Express app listening on port ' + port);
});

// I added "get " to path and it became /get. I think it is important to be clear 
// (for me in this stage at least) :)

app.get('/get', function(request, response){
    response.send('Basri says Hello, World!');
});