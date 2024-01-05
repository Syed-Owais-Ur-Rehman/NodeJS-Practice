const http = require("http");
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end()
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            
            case '/': 
            res.end("HomePage")
            break

            case '/about': 
            const username = myUrl.query.myname
            res.end(`About my friend ${username}`)
            break

            case '/search': 
            const search = myUrl.query.search
            res.end("search results are: "+ search)
            break

            default: 
            res.end("404")
        }
    })
    // console.log(req.headers)
    // console.log("New Req Rec.")
    //res.end("Hello From Server")
})

myServer.listen(8000, () => console.log("Server Started!"));

