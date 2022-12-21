//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//installing packagename
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file(stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y(everything default)

// const _ = require("lodash")
// const items = [1,[2, [3, [4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log("hello world!!!")




//Concepts
//event loop : allows node.js to perform nonblocking input/output, 
//despite the fact that javascript is single threaded,  by offloading operations to system kernel
//whenever possible.
//javascript: synchronous and single thread

//started operating system process
console.log("first");
//set time out second param: delay
//settimeout function is asynchronous which is offloaded
setTimeout(()=> {
    console.log("second");
}, 0)
console.log("third");
//completed and exited operating system process