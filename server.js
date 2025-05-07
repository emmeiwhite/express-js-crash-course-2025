// Revision with server.js

/** Step-1: We create our express server */

import express from 'express'
const server = express()

const PORT = process.env.PORT || 3000

/** Step-2: Setting our routes to server user requests */

server.get('/', (request, response, next) => {
  response.send(`<h2>Hello From Express!</h2>`)
})
server.listen(PORT, () => console.log(`Listening on port ${PORT} ...`))
