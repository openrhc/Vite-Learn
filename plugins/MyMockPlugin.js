const path = require('path')

module.exports = (options) => {
    return {
        configureServer(server) {
            const mock = require(path.resolve(process.cwd(), 'mock/index.js'))
            server.middlewares.use((req, res, next) => {
                const matchItem = mock.find(item => item.url === req.url)
                if (matchItem) {
                    const responseData = matchItem.response(req)
                    res.end(JSON.stringify(responseData))
                } else {
                    next()
                }
            })
        }
    }
}