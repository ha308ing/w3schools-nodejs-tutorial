const http = require("http");
const date = require("./date");

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Current date and time: ${date()}`);
    res.end();
}).listen(8080);
