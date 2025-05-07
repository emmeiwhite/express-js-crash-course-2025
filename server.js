// Revision with server.js

/** Step-1: We create our express server */

import express from 'express'
const server = express()

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Listening on port ${PORT} ...`))
