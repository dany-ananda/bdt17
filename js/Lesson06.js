//STEP 6 - MAKE IT MODULAR

//create file module.js first
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