//STEP 5 - FILTERED LS

var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files) {
    if(err) {
        console.log('error: ',err);
        return;
    }
    //loop using for and length of files
    //for (var i=0; i<files.length; i++) {
    //    if (path.extname(files[i]) === ext) {
    //        console.log(files[i]);
    //    }
    //}
    // OR loop using forEach
    files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file);
        }
      });
});
