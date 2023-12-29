const { dbQuerifier, callback } = require("../mysqlQuerifier");
const newTable = "newTable";

const showTables = `SHOW TABLES`;

const createTable = `CREATE TABLE ${newTable} (id INT AUTO_INCREMENT PRIMARY KEY)`;

const dropTable = `DROP TABLE ${newTable}`;

const dropTableIfExists = `DROP TABLE IF EXISTS ${newTable}`;

const queries = [
  {
    query: showTables,
    callback,
  },
  {
    query: createTable,
  },
  {
    query: showTables,
    callback,
  },
  {
    query: dropTable,
  },
  {
    query: dropTableIfExists,
  },
  {
    query: showTables,
    callback,
  },
];

dbQuerifier(false, queries);
