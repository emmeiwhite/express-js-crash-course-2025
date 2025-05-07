// Revision with server.js

/** Step-1: We create our express server */

import express from 'express'
const server = express()

import path from 'path'
import { fileURLToPath } from 'url'

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3000

/** Step-2: Setting our routes to server user requests */
server.get('/', (request, response, next) => {
  response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

server.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'about.html'))
})

server.listen(PORT, () => console.log(`Listening on port ${PORT} ...`))
