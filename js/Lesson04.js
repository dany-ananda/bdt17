//STEP 4 - MY FIRST ASYNC I/O

var fs = require('fs');
var namaFile = process.argv[2];

fs.readFile(namaFile, function(err, data) {
    if(err) {
        console.log('error: ',err);
        return;
    }
    var numberLine = data.toString().split('\n').length-1;
    console.log(numberLine);
});