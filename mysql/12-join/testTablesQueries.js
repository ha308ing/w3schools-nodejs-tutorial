const initialTables = {
  people: [
    { id: 1, name: "John", favorite_product: 154 },
    { id: 2, name: "Peter", favorite_product: 154 },
    { id: 3, name: "Amy", favorite_product: 155 },
    { id: 4, name: "Hannah", favorite_product: 0 },
    { id: 5, name: "Michael", favorite_product: 0 },
  ],
  products: [
    { id: 154, name: "Chocolate Heaven" },
    { id: 155, name: "Tasty Lemons" },
    { id: 156, name: "Vanilla Dreams" },
  ],
};

const initialTablesSQL = Object.entries(initialTables).reduce(
  (acc, [table, entries]) => {
    acc[table] = entries.reduce(
      (entriesArr, entry) => [...entriesArr, Object.values(entry)],
      []
    );
    return acc;
  },
  {}
);

const createTablePeople = `CREATE TABLE people (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  favorite_product INT)`;

const insertTablePeople = [
  `INSERT INTO people (id, name, favorite_product) VALUES ?`,
  [initialTablesSQL.people],
];

const listPeople = `SELECT *  FROM people`;

const dropPeople = `DROP TABLE IF EXISTS people`;

const createTableProducts = `CREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(255))`;

const insertTableProducts = [
  `INSERT INTO products (id, name) VALUES ?`,
  [initialTablesSQL.products],
];

const listProducts = `SELECT *  FROM products`;

const dropProducts = `DROP TABLE IF EXISTS products`;

const testTablesQueries = {
  create: [
    { query: createTablePeople },
    { query: insertTablePeople },
    { query: createTableProducts },
    { query: insertTableProducts },
  ],
  drop: [{ query: dropPeople }, { query: dropProducts }],
};

module.exports = testTablesQueries;
