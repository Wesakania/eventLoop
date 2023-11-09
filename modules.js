// module.exports
let myCalc = require("./testModule1");
let cal1 = new myCalc();
console.log(cal1.add(6,8));
//exports
//let myCalc2 = require("./module2")
//console.log(myCalc2.add(2,8));
//option 2 of export

let{ add, multiply,divide,subtraction} = require("./module2")
console.log(multiply(2,8));

require("./module3")();
require("./module3")();
require("./module3")();