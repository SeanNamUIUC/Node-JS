//file system: asynchronously or synchronously
const {readFile, writeFile} = require("fs")
console.log("start")
//callback : run when we are done, when our functionality that we are using is complete-> then we run
readFile("./content/first.txt", "utf-8",(err, result)=>{
    if(err) {
        console.log(err);
        return ;
    } else {
        const first = result;
        readFile('./content/second.txt', "utf-8", (err,result)=> {
        if(err) {
            console.log(err);
            return ;
        }
        const second = result;
            writeFile("./content/result-async.txt",
            `here's the result: ${first}, ${second} `, (err,result)=> {
                if(err) {
                    console.log(err);
                    return ;
                }
                console.log("done with this task")
            })
        })
    }
})
console.log("starting the next one")