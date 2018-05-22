//prerequsites:
// npm install express --save
// npm install body-parser --save
// [if not installed already] install the nodemon utility
// install and test with postman
// npm install sqlite3 --save

//imports (now we also added sqlite3)
var express = require('express');
var app = express();
var port = 3001;
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');

// create the db
var db = new sqlite3.Database('quotes.db');

//makes sure BodyParser used as middleware - every request passes through it
app.use(bodyParser.urlencoded({ extended: true }));

//Routes start here!
//GET: when the user enters to receive all quotes: localhost:3001/quotes
//now extended with proper sql commands
app.get('/quotes', function(req, res){
    if(req.query.year){
        db.all('SELECT * FROM quotes WHERE year = ?', [req.query.year], function(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                console.log("Return a list of quotes from the year: " + req.query.year);
                res.json(rows);
            }
        });
    }
    else{
        db.all('SELECT * FROM quotes', function processRows(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                for( var i = 0; i < rows.length; i++){
                    console.log(rows[i].quote + " " + rows[i].author+ " "+rows[i].year); //Basri expanded a bit
                }
                res.json(rows);

            }
        });
    }
});

//GET: when the user enters to receive a specific quote: localhost:3001/quoteswithID/2
//app.get('/quoteswithID/:id', function(req, res){
//    console.log("return quote with the ID: " + req.params.id);
//    res.send("Return quote with the ID: " + req.params.id);
//});

//
app.get('/quotes/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    db.get('SELECT * FROM quotes WHERE rowid = ?', req.params.id, function(err, row){
        if(err){
            console.log(err.message);
        }
        else{
            res.json(row);
        }
    });
});

//POST: when the user enters a new quote
//app.post('/quotes', function(req, res){
//    console.log("Insert a new quote: " + req.body.quote);
//    res.json(req.body);
//  });

  app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    db.run('INSERT INTO quotes VALUES (?, ?, ?)', [req.body.quote, req.body.author, req.body.year], function(err){
        if(err){
            console.log(err.message);
        }
        else{
            res.send('Inserted quote with id: ' + this.lastID);
        }
    });
});





//make sure the app listens to the correct port wit the following command:
// nodemon server.js
app.listen(port, function(){
    console.log('Basri-Express app listening on port  ' + port);
});