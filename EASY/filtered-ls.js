const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})

// let fs = require("fs");

// fs.readdir(process.argv[2], function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     let regexTest = new RegExp('.+\.' + process.argv[3] + '$');
//     data.filter(function(elem){
//         return regexTest.test(elem);
//     })
//     .forEach(function(elem) {
//         console.log(elem);
//     })
// })