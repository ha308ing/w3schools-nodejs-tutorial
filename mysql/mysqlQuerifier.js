const mysql = require("mysql2");
const { genUsers } = require("./genUsers");
const {
  MYSQL_HOST: host,
  MYSQL_USER: user,
  MYSQL_PASSWORD: password,
  MYSQL_DATABASE: database,
  MYSQL_TABLE: table,
} = process.env;

const con = mysql.createConnection({
  host,
  user,
  password,
  database,
});

function dbQuerifier(init = false, queryObjects = []) {
  const queries = init
    ? [
        {
          query: `CREATE TABLE ${table} (
              id INT AUTO_INCREMENT PRIMARY KEY,
              name VARCHAR(255),
              address VARCHAR(255))`,
          callback: callbackNoResult,
        },
        // insert multiple [<name>, <address>][]
        {
          query: [
            `INSERT INTO ${table}
              (name, address)
              VALUES ?`,
            [genUsers(10)],
          ],
          callback: callbackNoResult,
        },
        ...queryObjects,
        // drop table
        {
          query: `DROP TABLE IF EXISTS ${table}`,
          callback: callbackNoResult,
        },
      ]
    : queryObjects;

  con.connect(function (err) {
    if (err) throw err;
    console.log("mysql connected");
    queries.forEach(({ query, callback }) => {
      let _query = query;
      let _placeholder = null;
      const _callback = callback ?? callbackNoResult;
      if (Array.isArray(query)) {
        (_query = query[0]), (_placeholder = query[1]);
      }
      console.log(_query);
      con.query(_query, _placeholder, _callback);
    });
    con.end(function (err) {
      if (err) throw err;
      console.log("mysql connection end");
    });
  });
}

function callback(err, result) {
  if (err) throw err;
  console.log(result);
}
function callbackNoResult(err) {
  if (err) throw err;
}
function callbackCustom(fn) {
  return function (err, result) {
    if (err) throw err;
    fn(result);
  };
}

module.exports = {
  dbQuerifier,
  callback,
  callbackCustom,
  table,
};
