const { dbQuerifier, table, callback } = require("../mysqlQuerifier");

const orderByName = `SELECT name, id FROM ${table} ORDER BY name`;

const orderByNameDesc = `SELECT name, id FROM ${table} ORDER BY name DESC`;

const queries = [
  { query: orderByName, callback },
  { query: orderByNameDesc, callback },
];

dbQuerifier(true, queries);
