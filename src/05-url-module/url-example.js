// url module splits up a web address into readable parts
const url = require("url");

const adr = "http://localhost:8080/default.html?year=2017&month=may";

const q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(JSON.stringify(q.query, null, 2));
