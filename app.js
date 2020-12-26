const http = require('http')
const routes = require('./routes.js')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const hostname = process.env.HOST || '127.0.0.1'
const port = process.env.PORT

const server = http.createServer(routes.defaultRoute)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})