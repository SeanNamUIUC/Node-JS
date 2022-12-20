//Everyfile is module
//Modules: We are in charge of what we are sharing.

//local
const secret = "SECRET";
//share
const john = "JOHN";
const peter = "PETER";


sayHi("susan");
sayHi("john");

module.exports = {john, peter};
console.log(module)