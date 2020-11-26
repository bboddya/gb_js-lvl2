const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const publickPath = './public'

    let body = null
    try {
        body = fs.readFileSync(`${publickPath}${req.url}`)
    } catch (e) {
        console.log(e)
        body = fs.readFileSync(`${publickPath}/index.html`)
    }
    res.end(body)
})

const port = process.env.PORT || 3000
server.listen(port)
console.log(`Server started ${port}!`)
