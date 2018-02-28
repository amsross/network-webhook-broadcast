const party = require('ssb-party')
const { pull, drain, values } = require('pull-stream')
const { tap, tapAsync } = require('pull-tap')
const logger = require('pino')()

const { createHttpIn } = require('./lib/http-in')

const options = {
  port: 3000
}

// createHttpIn(options)(pull())

party((err, sbot) => pull(
  sbot.createFeedStream({ live: true }),
  tap(x => logger.info(x)),
  drain(x => logger.info(x), x => process.exit(0))
))
