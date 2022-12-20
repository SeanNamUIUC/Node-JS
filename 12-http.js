//HTTP modules : will help to set up web server
const http = require("http")
//first param: Incoming request(client requesting in web page) , second param :response: what we are sending back
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to our homepage")
    }
    if(req.url === "/about") {
        res.end("here is our short history")
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>Can't find the page that you are looking for</p>
        <a href = "/">back home </a>
        `
    )
    

})

//what port our server will listen to
server.listen(5000);

