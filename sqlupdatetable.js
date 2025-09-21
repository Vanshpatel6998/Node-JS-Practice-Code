var mysql = require('mysql2');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node"
});

con.connect(function(err){
    if (err) throw err;
    var sql = "UPDATE customer SET address = 'America' WHERE address='Ahmedabad'";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result.affectedRows+"record(s) updated");
    });
});