const static = require('node-static')
const http = require('http')
const file = new static.Server('./public')
const server = http.createServer((req, res) => {
    req.addListener('end', () => {
        file.serve(req, res)
    }).resume()
})
server.listen(process.env.SERVER_PORT || 3000)
console.log('Server started')
