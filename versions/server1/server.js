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

/** Step-3:
 *
 * This was just for learning, we'll keep our routes one by one! and server */
// server.use(express.static('static_folder'))

/** Step-2: Setting our routes to server user requests */
server.get('/', (request, response, next) => {
  response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

server.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'about.html'))
})

/** B) To download any file with express */
server.get('/README.md', (req, res) => {
  res.download(path.join(__dirname, '/README.md'))
})

server.listen(PORT, () => console.log(`Listening on port ${PORT} ...`))
