const { dbQuerifier, table, callback } = require("../mysqlQuerifier");

const name = "Kelley Kautzer";

const insertTestRecord = `INSERT INTO ${table} (name, address) VALUES ("${name}", "481 Mayer Cape")`;

const deleteRecord = [`DELETE FROM ${table} WHERE name=?`, [name]];

const outputRecords = `SELECT name FROM ${table}`;

const queries = [
  { query: outputRecords, callback },
  { query: insertTestRecord },
  { query: outputRecords, callback },
  { query: deleteRecord },
  { query: outputRecords, callback },
];

dbQuerifier(true, queries);
