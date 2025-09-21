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
    con.query("SELECT*FROM Customer",function(err,result,fields){
        if (err) throw err;
        console.log(result);
    });
});