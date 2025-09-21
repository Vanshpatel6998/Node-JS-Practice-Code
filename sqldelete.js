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
    var sql = "DELETE FROM Customer WHERE Address = 'Australia'";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("Number of records deleted:" + result.affectedRows);
    });
});