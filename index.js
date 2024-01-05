const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url) {
            case '/': res.end("HomePage")
            break
            case '/about': res.end("AboutPage")
            break
            default: res.end("404")
        }
    })
    // console.log(req.headers)
    // console.log("New Req Rec.")
    //res.end("Hello From Server")
})

myServer.listen(8000, () => console.log("Server Started!"));

