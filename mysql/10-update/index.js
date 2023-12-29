const {
  dbQuerifier,
  table,
  callbackCustom,
  callback,
} = require("../mysqlQuerifier");

const name = "Sylvester Metz";
const address = "481 Mayer Cape";
const newName = "Metz Sylvester";

const insertTestRecord = [
  `INSERT INTO ${table} (name, address) VALUES ?`,
  [[[name, address]]],
];

const update = [`UPDATE ${table} SET name=? WHERE name=?`, [newName, name]];

const updateBack = [`UPDATE ${table} SET name=? WHERE name=?`, [name, newName]];

const select = `SELECT name FROM ${table} WHERE name LIKE "%Sylvester%"`;

const queries = [
  {
    query: insertTestRecord,
  },
  {
    query: update,
    callback: callbackAffectedRow,
  },
  {
    query: select,
    callback,
  },
  {
    query: updateBack,
    callback: callbackAffectedRow,
  },
  {
    query: select,
    callback,
  },
];

function callbackAffectedRow() {
  return callbackCustom(result => {
    console.log(`${result.affectedRows} record(s) updated`);
  });
}

dbQuerifier(true, queries);
