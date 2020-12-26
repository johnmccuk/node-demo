
const defaultRoute = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!!\n')
}

exports.defaultRoute = defaultRoute