var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
	if (err) {
		throw err;
	}
	var fileExtension = new RegExp("." + process.argv[3]);
	var newArr = list.filter(function(file){
		return fileExtension.test(file);
	});
	newArr.forEach(function(file){
		console.log(file);
	})
})