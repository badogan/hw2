var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
//var TYPES = require('tedious').TYPES;  

// Create connection to database
var config = 
   {
    userName: 'badogan',  
    password: 'To$hiba22123',  
    server: 'basri-db.database.windows.net',  

     options: 
        {
           database: 'exercise-db' //update me
           , encrypt: true
        }
   }
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           queryDatabase()
       }
   }
 );

function queryDatabase()
   { console.log('Reading rows from the Table...');

       // Read all rows from table
     request = new Request(
          //"SELECT TOP 20 pc.Name as CategoryName, p.name as ProductName FROM [SalesLT].[ProductCategory] pc JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid",
          "SELECT * from contacts",
             function(err, rowCount, rows) 
                {
                    console.log(rowCount + ' row(s) returned');
                    process.exit();
                }
            );
var output="";
     request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
            output=output+column.value+" ";
         });
         console.log(output)
         output=""
             });
     connection.execSql(request);
   } 