//STEP 3 - MY FIRST I/O

var fs = require('fs');
var namaFile = process.argv[2];
var buffer = fs.readFileSync(namaFile).toString().split('\n').length-1;
console.log(buffer);
