// npm init
// npm init -y for default settings
// npm install after git cloning
// npm i nodemon -D 
// npm uninstall boostrap

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello erica')