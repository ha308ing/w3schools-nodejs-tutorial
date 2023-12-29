const { dbQuerifier, table, callback } = require("../mysqlQuerifier");

const limit = `SELECT name FROM ${table} LIMIT 3`;

const limitOffset = `SELECT name FROM ${table} LIMIT 3 Offset 9`;

// limit <offset>, <limit>
const limitOffsetShort = `SELECT name FROM ${table} LIMIT 9, 3`;

const queries = [
  {
    query: limit,
    callback,
  },
  {
    query: limitOffset,
    callback,
  },
  {
    query: limitOffsetShort,
    callback,
  },
];

dbQuerifier(true, queries);
