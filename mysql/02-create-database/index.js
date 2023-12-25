const mysql = require("mysql2");
const {
  MYSQL_HOST: host,
  MYSQL_USER: user,
  MYSQL_PASSWORD: password,
  MYSQL_DATABASE: database,
} = process.env;

const con = mysql.createConnection({
  host,
  user,
  password,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("mysql is connected");

  // mysql> grant all on *.* to 'MYSQL_USER'@'localhost'
  con.query(`CREATE DATABASE ${database}`, function (err, result) {
    if (err) throw err;
    console.log("database is created: ", result);
  });
});
