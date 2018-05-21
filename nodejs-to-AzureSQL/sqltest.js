var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

// Create connection to database
var config = 
   {
     userName: 'badogan', // update me
     password: 'To$hiba22123', // update me
     server: 'basri-db.database.windows.net', // update me
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
   { console.log('Basri - Reading rows from the Table...');

       // Read all rows from table
     request = new Request(
          //"SELECT TOP 20 pc.Name as CategoryName, p.name as ProductName FROM [SalesLT].[ProductCategory] pc JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid",
          "select * from contacts",
             function(err, rowCount, rows) 
                {
                    console.log(rowCount + ' row(s) returned');
                    process.exit();
                }
            );

var i=0;
var array=[];

     request.on('row', function(columns) {
        columns.forEach(function(column) {
            array[i]=[column.metadata.colName,column.value];
            console.log("%s\t%s", column.metadata.colName, column.value);
            i=i+1;
         });
             });
     
    console.log('array[0]', array[0]);
     connection.execSql(request);
   }