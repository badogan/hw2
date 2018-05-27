var Connection = require('tedious').Connection;  
var config = {  
    userName: 'badogan',  
    password: 'To$hiba22123',  
    server: 'basri-sqldb.database.windows.net',  
    // When you connect to Azure SQL Database, you need these next options.  
    options: {encrypt: true, database: 'contacts'}
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
    request = new Request("INSERT table_contacts VALUES (@name, @surname, @age, @notes);", function(err) {  
     if (err) {  
        console.log(err);
    }  
    });
      
    request.addParameter('name', TYPES.NVarChar , 'Arda');  
    request.addParameter('surname', TYPES.NVarChar , 'Ocean');  
    request.addParameter('age', TYPES.NVarChar , '28');  
    request.addParameter('notes', TYPES.NVarChar , 'Dnm notes for Arda Ocean');
    //request.on('row', function(columns) {  
    //    columns.forEach(function(column) {  
    //      if (column.value === null) {  
    //        console.log('NULL');  
    //      } else {  
    //        console.log("Product id of inserted item is " + column.value);  
    //      }  
    //    });  
          
    connection.execSql(request);
}