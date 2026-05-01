const http = require('http')

const server = http.createServer(function(req,res){
    res.end("Server is Created")
})

server.listen(3000)

console.log("Hello Server")