//STEP 13 - HTTP JSON API SERVER

var http = require('http');
var url = require('url');

http.createServer(function(req,res) {
    var parseUrl = url.parse(req.url,true);
    var date = new Date(parseUrl.query.iso);

    switch(parseUrl.pathname) {
        case '/api/parsetime':
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
            res.writeHead(200, {
                "Content-Type":"application/json",
            });
            res.end(JSON.stringify({
                "unixtime":date.getTime()
            }));
            break;
    }
}).listen(process.argv[2]);