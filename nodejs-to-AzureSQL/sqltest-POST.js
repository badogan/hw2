var Connection = require('tedious').Connection;  
var config = {  
    userName: 'badogan',  
    password: 'To$hiba22123',  
    server: 'basri-db.database.windows.net',  
    // When you connect to Azure SQL Database, you need these next options.  
    options: {encrypt: true, database: 'exercise-db'}
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");  
    executeStatement1();  
});  

var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES;  

function executeStatement1() {  
    request = new Request("INSERT contacts VALUES (@ID, @FirstName, @Age, @PhoneNumber);", function(err) {  
     if (err) {  
        console.log(err);}  
    });  
    request.addParameter('ID', TYPES.NVarChar,'10');  
    request.addParameter('FirstName', TYPES.NVarChar , 'Zeynep');  
    request.addParameter('Age', TYPES.Int, 48);  
    request.addParameter('PhoneNumber', TYPES.NVarChar , '888-888-8888');  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            console.log("Product id of inserted item is " + column.value);  
          }  
        });  
    });       
    connection.execSql(request);  
} 