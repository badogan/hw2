var express = require('express');
var app = express();
var port = 3001;
app.listen(port, function(){
    console.log('Basri-Express app listening on port ' + port);
});

// I added "get " to path and it became /get. I think it is important to be clear 
// (for me in this stage at least) :)

app.get('/', function(request, response){
    response.send('Basri get request received');
});

var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
    ];


app.get('/quotes', function(req, res){
    console.log("Get a list of all quotes as json");
    if(req.query.year){
        res.send("Return a list of quotes from the year: " + req.query.year);
      }
      else{
          res.json(quotes);
      }
});

app.get('/quoteswithID/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
    res.send(quotes[req.params.id])
});
