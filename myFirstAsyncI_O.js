var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
	var numberOfLinesInFile = data.toString().split('\n').length;
	console.log(numberOfLinesInFile - 1);
})