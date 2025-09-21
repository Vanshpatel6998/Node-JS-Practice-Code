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
    var sql = "INSERT INTO Customer(Name,Address)VALUES('John','Australia'),('John2','Ahmedabad'),('John2','Gandhinagar')";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("1 record inserted");
    });
});