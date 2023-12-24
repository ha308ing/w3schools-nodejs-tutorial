const fs = require("fs");
const path = require("path");

const demoPath = path.resolve(__dirname, "./demo.html");

const readStream = fs.createReadStream(demoPath);

readStream.on("open", function () {
    console.log("demo.html is open");
});
