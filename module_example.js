var calculator = require('./module_itself.js')

var three = calculator(3)
console.log(three.add(1), three.subtract(2))

var two = calculator(2)
console.log(two.add(1), two.subtract(2))

two.update(100)
console.log(two.add(1), two.subtract(2))
