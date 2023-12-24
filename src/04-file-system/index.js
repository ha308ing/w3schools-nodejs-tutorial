const http = require("http");
const fs = require("fs");
const path = require("path");

/* 

    Common use for the File System module:
    - read
        - `fs.readFile()`
    - create
        - `fs.appendFile()`
        - `fs.open()`
        - `fs.writeFile()`
    - update
        - `fs.appendFile()`
        - `fs.writeFile()`
    - delete
        - `fs.unlink()`
    - rename
        - `fs.rename()`

*/

const demoHTML = path.resolve(__dirname, "./demo.html");

// append to the file, create if not found
fs.appendFile(demoHTML, `<p>${new Date().toLocaleTimeString()}: hello</p>\r`, function (err) {
    if (err) throw err;
    console.log("demo.html file updated");
});

// open file with flags (w - writing)
/* fs.open(demoHTML, "w", function (err, file) {
    if (err) throw err;
    console.log("demo.html is opened for writing");
}); */

// fs.writeFile() replaces the specified file and content
/* fs.writeFile(demoHTML, "<h1>Hello</h1>", function (err) {
    if (err) throw err;
    console.log("demo.html file is overwritten");
}); */

// fs.unlink() removes the file
/* fs.unlink(path.resolve(__dirname, "./demo.txt"), function (err) {
    if (err) throw err;
    console.log(`demo.txt was deleted`);
}); */

http.createServer(function (req, res) {
    // read a file on the server and return its content
    fs.readFile(demoHTML, function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8080);
