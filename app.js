import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Setting our Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'))
})

app.listen(3000, () => console.log(`Server is listening on port: 3000`))
