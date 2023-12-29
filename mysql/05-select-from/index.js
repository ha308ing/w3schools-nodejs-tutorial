const { dbQuerifier, table } = require("../mysqlQuerifier");

const selectAll = `SELECT * FROM ${table}`;

const selectColumns = `SELECT name, address FROM ${table}`;

const selectColumn = `SELECT name FROM ${table}`;

function callbackSelect(err, result, fields) {
  if (err) throw err;
  console.log("fields:", fields);
  // console.log(fields[1].name);
  // console.log(result[2].address);
  console.log(result);
}

const queries = [
  {
    query: selectAll,
    callback: callbackSelect,
  },
  {
    query: selectColumns,
    callback: callbackSelect,
  },
  {
    query: selectColumn,
    callback: callbackSelect,
  },
];

dbQuerifier(true, queries);
