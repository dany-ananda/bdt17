
var fs = require('fs');
var path = require('path');
var folder = process.argv[2];

module.exports = function(dirName, extName, callback) {
    fs.readdir(dirName, function(err, files) {
        var _ext = '.' + extName;

        if(err) {
            callback(err, null);
        } 
        else {
            var filteredFile = [];
            for(var i=1; i<files.length; i++) {
                 if(_ext == path.extname(files[i])) {
                    filteredFile.push(files[i]);
                 } else {
                     continue;
                 }
            }
        callback(err, filteredFile);
        }
    });
}

//OR
/*
    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/