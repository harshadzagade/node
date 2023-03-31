const app = require('./app')
// console.log(app.z())


const arr=[2,5,6,4,3,9,3]

let result = arr.filter( (item) => {
 return item===3
})

console.log(result)
