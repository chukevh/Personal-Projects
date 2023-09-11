const path = require('path');

// path seperator
console.log(path.sep)

// joins path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// base file
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)