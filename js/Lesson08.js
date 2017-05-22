//STEP 8 - HTTP COLLECT

var http = require('http');

http.get(process.argv[2], function(res) {
    var rawData = '';

    res.setEncoding('utf8');
    res.on('data',function(chunk) {
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