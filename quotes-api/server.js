//prerequsites:
// npm install express --save
// npm install body-parser --save
// [if not installed already] install the nodemon utility
// install and test with postman

//imports
var express = require('express');
var app = express();
var port = 3001;
var bodyParser = require('body-parser');

//makes sure BodyParser used as middleware - every request passes through it
app.use(bodyParser.urlencoded({ extended: true }));

// quotes "manual" entry as we are not using a db
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

//Routes start here!
//GET: when the user enters to receive all quotes: localhost:3001/quotes
app.get('/quotes', function(req, res){
    console.log("Get a list of all quotes as json");
    if(req.query.year){
        res.send("Return a list of quotes from the year: " + req.query.year);
      }
      else{
          res.json(quotes);
      }
});

//GET: when the user enters to receive a specific quote: localhost:3001/quoteswithID/2
app.get('/quoteswithID/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
});

//POST: when the user enters a new quote
app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    res.json(req.body);
  });

//make sure the app listens to the correct port wit the following command:
// nodemon server.js
app.listen(port, function(){
    console.log('Basri-Express app listening on port  ' + port);
});
