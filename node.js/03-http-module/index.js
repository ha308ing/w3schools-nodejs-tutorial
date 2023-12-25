const http = require("http");
const url = require("url");

// create a server object
http.createServer(function (req, res) {
    // set header for html content
    res.writeHead(200, { "Content-Type": "text/html" });

    // get query request
    const query = url.parse(req.url, true).query;

    // writes a response to the client
    res.write(`
        <h1>Hello</h1>
        <pre>req.url: ${req.url}</pre>
        <pre>${JSON.stringify(query, null, 2)}</pre>
    `);

    // end the response
    res.end();
})

    // the server object listens on port 8080
    .listen(8080);
