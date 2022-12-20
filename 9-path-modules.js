const path = require("path")
console.log(path.sep); // path segment separator:

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base) //returns test.txt

const absolutepath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutepath);