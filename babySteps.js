var rawArray = process.argv;

function checkForNums(arr){
	var output = [];
	for (var i = 2; i < arr.length; i++) {
		if (/\d+/.test(arr[i])) {
			var num = Number(arr[i]);
			output.push(num);
		}
	}
	return output;
}

console.log(checkForNums(rawArray).reduce(function(a, b) {return a + b;}));