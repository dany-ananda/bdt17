//STEP 9 - 
var http = require('http');

http.get(process.argv[2],function(res) {
	var rawData = '';
	
	res.on('error',function(err) {
		console.log(err);
	});
	res.on('end',function() {
		console.log(rawData);
		http.get(process.argv[3], function(res) {
			var rawData = '';
			res.on('data',function(chunk) {
				rawData += chunk;
			});
			res.on('end',function() {
				console.log(rawData);
				http.get(process.argv[4], function(res) {
					var rawData = '';
					res.on('data',function(chunk) {
						rawData += chunk;
					});
					res.on('end',function() {
						console.log(rawData);						
					});
				});
			});
		});
	});
	res.on('data',function(chunk) {
		rawData += chunk;
	});
	res.setEncoding('utf8');
});