var sqlite3 = require('sqlite3');
var db = new sqlite3.Database(':memory:');

db.serialize(function(){
    //create table (Basri Note: This is the way you run any SQL command)
    db.run('CREATE TABLE Contacts (first_name TEXT, last_name TEXT, age INTEGER)');

    //insert values - put, post
    db.run('INSERT INTO Contacts VALUES ("John", "Doe", 25)');
    db.run('INSERT INTO Contacts VALUES ("Jane", "Doe", 19)');
    db.run('INSERT INTO Contacts VALUES ("Sue", "Smith", 42)');

    //get queries (Basri Note: Note that there are 3 queries. First one works on all rows)
    db.all('SELECT * FROM Contacts', processRows);
    //get: this one works on one row at a time. It works on all though.
    db.each('SELECT * FROM Contacts', processRow);
    //get: this one works on one row ata a time but with a condition. that condition is "taken in" with the help of ?
    db.each('SELECT * FROM Contacts WHERE last_name = "Doe"', processRow);
    // this is an example for get. a specific one.
    var firstName = 'Sue';
    db.get('SELECT * FROM Contacts WHERE first_name = ?', [firstName], function(err, row){
        console.log("Get "+firstName+" Age:");
        if(err){
            console.log("ERROR: " + err.message);
        }
        else{
            console.log(row.age);
        }
    });
});

// With the function below, the data is in the row[i] array. you can use row[1].first_name. Note that first_name is an input parameter 
// from the place where the function is called. Also note that there is a transient variable feeding that parameter:)
function processRows(err, rows){
    console.log("PROCESS ROWS");
    if(err){
        console.log("ERROR: " + err.message);
    }
    else{
        for(var i = 0; i < rows.length; i++){
            console.log(rows[i].first_name);
        }
    }
}

function processRow(err, row){
    console.log("PROCESS ROW");
     if(err){
        console.log("ERROR: " + err.message);
    }
    else{
        console.log(row.first_name);
    }
}

db.close();