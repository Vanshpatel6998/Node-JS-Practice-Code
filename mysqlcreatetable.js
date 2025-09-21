var mysql = require('mysql2');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE Customer(Name VARCHAR(255),Address VARCHAR(255))";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Table created");
    });
});