//STEP 12 - HTTP UPPERCASERER
//install module 'through2-map' terlebih dahulu menggunakan npm install through2-map

var http = require('http');
var map = require('through2-map');

http.createServer(function(req,res) {
    if(req.method == 'POST') {
        var _map = map(function(chunk) {
            return chunk.toString().toUpperCase();
        });
        req.pipe(_map).pipe(res);
    }
}).listen(process.argv[2]);