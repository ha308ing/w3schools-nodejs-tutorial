const mysql = require("mysql2");
const { MYSQL_USER, MYSQL_PASSWORD } = process.env;

// mysql> create user 'MYSQL_USER'@'localhost' identified by 'MYSQL_PASSWORD'
const con = mysql.createConnection({
    host: "localhost",
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("mysql is connectd");

    /*
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
    */
});
