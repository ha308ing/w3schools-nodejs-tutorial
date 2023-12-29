const { dbQuerifier, callbackCustom, table } = require("../mysqlQuerifier");

const createTable = `
CREATE TABLE ${table} (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255)
)`;

const dropTable = `DROP TABLE ${table}`;

const query = [
  {
    query: createTable,
    callback: callbackCustom(result => {
      console.log("table created", result);
    }),
  },
  { query: dropTable },
];

dbQuerifier(false, query);
