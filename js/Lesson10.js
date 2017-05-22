//STEP 10 - TIME SERVER

var net = require('net');

net.createServer(function(socket) {
    var date = new Date();
    //'YYYY-MM-DD hh:mm'
    var month = date.getMonth()+1; //getMonth() dimulai dari 0, untuk current month + 1
    month = (month.length>1) ? month:'0'+month; //2 digit format
    var minutes = date.getMinutes();
    minutes = (minutes<10) ? '0'+minutes:minutes; //2 digit format

    socket.write(date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ':' + minutes + "\n");
    socket.end('');
}).listen(process.argv[2]);