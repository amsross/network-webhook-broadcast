const http = require('http')
const { parse, stringify } = require('JSONStream')

function createHttpIn (options) {
  return through => http.createServer((req, res) => req
    .pipe(parse())
    .pipe(through(options))
    .pipe(stringify())
    .pipe(res))
    .listen(options.port || 3000)
}

module.exports = { createHttpIn }
