//STEP 11 - HTTP FILE SERVER
//buat file yang akan dibaca --> coba.txt
//node program.js 3000 coba.txt
//buka browser localhost:3000 --> akan menampilkan isi coba.txt

var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var namaFile = process.argv[3];

http.createServer(function(req,res) {
    var stream = fs.createReadStream(namaFile);
    stream.on('open',function() {
        stream.pipe(res);
    });
    stream.on('close',function() {
        res.end();
    });
}).listen(portNumber);
