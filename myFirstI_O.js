var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);
console.log(bufferObj.toString().split('\n').length - 1);