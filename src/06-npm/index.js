const http = require("http");
const { faker } = require("@faker-js/faker");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(faker.person.fullName());
    res.end();
}).listen(8080);
