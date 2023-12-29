const { escape } = require("mysql2");
const { dbQuerifier, table, callback } = require("../mysqlQuerifier");

const name = "Kelley Kautzer";
const address = "481 Mayer Cape";

// const insertTestRecord = `INSERT INTO ${table} (name, address) VALUES ("${name}", "${address}")`;
const insertTestRecord = [
  `INSERT INTO ${table} (name, address) VALUES ?`,
  [[[name, address]]],
];

const selectWhereName = `SELECT * FROM ${table} WHERE name="Kelley Kautzer"`;

const selectNameLike = `SELECT address FROM ${table} WHERE name LIKE "K%"`;

const selectEscape = `SELECT name FROM ${table} WHERE name=${escape(name)}`;

const selectPlaceholder = [`SELECT name FROM ${table} WHERE name=?`, [name]];

const selectMultiplePlaceholders = [
  `SELECT name FROM ${table} WHERE name=? OR address=?`,
  [name, address],
];

const queries = [
  { query: insertTestRecord },
  { query: selectWhereName, callback },
  { query: selectNameLike, callback },
  { query: selectEscape, callback },
  { query: selectPlaceholder, callback },
  { query: selectMultiplePlaceholders, callback },
];

dbQuerifier(true, queries);
