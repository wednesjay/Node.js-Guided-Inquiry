var fs = require('fs')

let filename = "planets.txt";

fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('FILE: ' + filename);
    console.log(data)
});