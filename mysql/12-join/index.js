const { dbQuerifier, callback } = require("../mysqlQuerifier");
const { create: createTest, drop: dropTest } = require("./testTablesQueries");

// also inner join
const join = `
SELECT
  people.name AS name,
  products.name AS favorite
FROM
  people JOIN products
  ON people.favorite_product = products.id`;

// left join: include all records from the left even if not connected to the right
const leftJoin = `
SELECT
  people.name AS name,
  products.name AS favorite
FROM
  people LEFT JOIN products
  ON people.favorite_product = products.id`;

// right join: include all records from the right even if the left is not connected
const rightJoin = `
SELECT
  people.name AS name,
  products.name AS favorite
FROM
  people RIGHT JOIN products
  ON people.favorite_product = products.id`;

const queries = [
  ...createTest,
  { query: join, callback },
  { query: leftJoin, callback },
  { query: rightJoin, callback },
  ...dropTest,
];

dbQuerifier(false, queries);
