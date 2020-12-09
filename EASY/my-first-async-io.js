let fs = require("fs");

function handleFile(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString().match(/\n/g).length);
}

fs.readFile(process.argv[2], handleFile);