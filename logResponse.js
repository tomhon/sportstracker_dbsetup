




module.exports = function logResponse (eventUpdate) {
    var date = new Date();
    eventUpdate.id = date.toISOString();
    console.log('attempting write to docdb');
    getDBDocument(eventUpdate)
        .then(()  =>   console.log('successfully written ', eventUpdate))
        .catch((error) => { console.log(`Completed with error ${JSON.stringify(error)}`) });


}

var Connection = require('tedious').Connection;  
var config = require('./configsql');
var connection = new Connection(config);  
connection.on('connect', function(err) {  
// If no error, then good to proceed.  
    console.log("Connected");  
});  

//open connection

var Connection = require('tedious').Connection;  
var config = require('./configsql'); 
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");  
    executeStatement();  
});  

//query a row

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

function executeStatement() {  
    request = new Request("SELECT c.CustomerID, c.CompanyName,COUNT(soh.SalesOrderID) AS OrderCount FROM SalesLT.Customer AS c LEFT OUTER JOIN SalesLT.SalesOrderHeader AS soh ON c.CustomerID = soh.CustomerID GROUP BY c.CustomerID, c.CompanyName ORDER BY OrderCount DESC;", function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
    });  

    request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });  
    connection.execSql(request);  
} 


//Insert a Row

var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES;  

function executeStatement1() {  
    request = new Request("INSERT SalesLT.Product (Name, ProductNumber, StandardCost, ListPrice, SellStartDate) OUTPUT INSERTED.ProductID VALUES (@Name, @Number, @Cost, @Price, CURRENT_TIMESTAMP);", function(err) {  
     if (err) {  
        console.log(err);}  
    });  
    request.addParameter('Name', TYPES.NVarChar,'SQL Server Express 2014');  
    request.addParameter('Number', TYPES.NVarChar , 'SQLEXPRESS2014');  
    request.addParameter('Cost', TYPES.Int, 11);  
    request.addParameter('Price', TYPES.Int,11);  
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





