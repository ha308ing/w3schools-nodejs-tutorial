const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

http.createServer(function (req, res) {
    if (req.url == "/fileupload") {
        const form = new formidable.IncomingForm();
        // parse the uploaded file
        form.parse(req, function (err, fields, files) {
            // save the file
            const oldPath = files.filetoupload[0].filepath;
            const newPath = path.resolve(__dirname, `./_uploads/${files.filetoupload[0].originalFilename}`);

            fs.rename(oldPath, newPath, function (err) {
                if (err) throw err;

                res.write("File uploaded");
                res.end();
            });
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });

        // create an upload form
        res.write(`
        <form
            action="fileupload"
            method="post"
            enctype="multipart/form-data"
        >`);
        res.write(`
        <input
            type="file"
            name="filetoupload">
        <br>`);
        res.write(`
        <input type="submit">`);
        res.write(`
        </form>`);

        return res.end();
    }
}).listen(8080);
