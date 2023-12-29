const { genUsers } = require("../genUsers");
const {
  callback,
  dbQuerifier,
  callbackCustom,
  table,
} = require("../mysqlQuerifier");

// insert multiple [<name>, <address>][], provide vars to call: con.query(sql, [var], cb)
const insertMultiple = [
  `INSERT INTO ${table} (name, address) VALUES ?`,
  [genUsers(5)],
];

// insert single
const insertSingle = `INSERT INTO ${table} (name, address) VALUES ("Peter Samsa", "Highway37")`;

// output records
const outputRecords = `SELECT name, address from ${table}`;

const queryObjects = [
  {
    query: insertMultiple,
    callback: callbackCustom(result => {
      console.log(`inserted ${result.affectedRows} records`);
    }),
  },
  {
    query: insertSingle,
    callback: callbackCustom(result => {
      console.log(`inserted record with id: ${result.insertId}`);
    }),
  },
  {
    query: outputRecords,
    callback,
  },
];

dbQuerifier(true, queryObjects);
