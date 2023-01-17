const sayHi=require ('./utils')
const names = require ('./names')
const data =require ('./alternative-flavor')

require('./mindgraned')

sayHi(names.john);
sayHi(names.peter);
console.log(data)