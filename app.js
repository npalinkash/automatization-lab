const http = require('http')
const { getHello } = require('./controllers/appInfo.js')

const server = http.createServer((req, res) => {
    getHello(req, res)
})

module.exports = server