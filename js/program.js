//STEP 1
/*
console.log("HELLO WORLD");
*/

//STEP 2
/*
var result = 0;

for (var i=2; i<process.argv.length; i++) {
	result += Number(process.argv[i]);
};
console.log(result);
*/

//STEP 3
/*
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(buffer);
*/

//STEP 4
/*
var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if(err) {
        console.log('error: ',err);
        return;
    }
    var numberLine = data.toString().split('\n').length-1;
    console.log(numberLine);
});
*/

//STEP 5
/*
var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files) {
    if(err) {
        console.log('error: ',err);
        return;
    }
    //for (var i=0; i<files.length; i++) {
    //    console.log[files[i]];
    //    if (path.extname(files[i]) === ext) {
    //        console.log(files[i]);
    //    }
    //}
    // OR
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file);
        }
      });
});
*/
//STEP 6
/*
//var modul = require('./module.js'); or no need using ext js
var mymodule = require('./module');
var folder = process.argv[2];
var filterStr = process.argv[3];

mymodule(folder, filterStr, function(err, data) {
    if (err) {
        console.log('error: ',err);
        return;
    }
    data.forEach(function(item) {
        console.log(item);
    });
});
*/

//STEP 7
/*
var http = require('http');
var url = process.argv[2];

http.get(url,function(res) {

    res.setEncoding('utf8');
    res.on('data',function(chunk) {
        console.log(chunk);
    });

    res.on('error', function(err) {
            console.log(err);
    });
});
*/

//STEP 8
/*
var http = require('http');

http.get(process.argv[2], function(res) {
    var rawData = '';

    res.setEncoding('utf8');
    res.on('data',function(chunk) {
        //console.log(chunk);
        rawData += chunk;
    });
    res.on('end', function() {
        console.log(rawData.length);
        console.log(rawData);
    });
    res.on('error', function(err) {
            console.log(err);
    });
});
*/

//STEP 9
/*

*/

//STEP 10
/*
var net = require('net');

net.createServer(function(socket) {
    var date = new Date();
    //'YYYY-MM-DD hh:mm'
    var month = date.getMonth()+1;
    month = (month.length>1) ? month:'0'+month;
    var minutes = date.getMinutes();
    minutes = (minutes<10) ? '0'+minutes:minutes;
    socket.write(date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + minutes + "\n");
    socket.end('');
}).listen(process.argv[2]);
*/

//STEP 11
//node program.js 3000 coba.txt
//buka browser localhost:3000 --> execute coba.txt
/*
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
    var stream = fs.createReadStream(process.argv[3]);
    stream.on('open',function() {
        stream.pipe(res);
    });
    stream.on('close',function() {
        res.end();
    });
}).listen(process.argv[2]);
*/

//STEP 12
/*
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
*/

//STEP 13
/*
var http = require('http');
var url = require('url');

http.createServer(function(req,res) {
    var parseUrl = url.parse(req.url,true);
    var date = new Date(parseUrl.query.iso);
    //console.log(parseUrl);
    switch(parseUrl.pathname) {
        case '/api/parsetime':
            //var date = new Date(parseUrl.query.is0);
            res.writeHead(200, {
                "Content-Type":"application/json",
            });
            res.end(JSON.stringify({
                "hour":date.getHours(),
                "minute":date.getMinutes(),
                "second":date.getSeconds()
            }));
            break;
        case '/api/unixtime':
            //var date = new Date(parseUrl.query.is0);
            res.writeHead(200, {
                "Content-Type":"application/json",
            });
            res.end(JSON.stringify({
                "unixtime":date.getTime()
            }));
            break;
    }
}).listen(process.argv[2]);
*/
//learnyounode answer
/*
    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/