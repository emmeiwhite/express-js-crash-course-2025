import express from 'express'
const app = express()

/** Step-1: Tell Express about which template engine we are using */
app.set('view engine', 'ejs')
console.log(app.get('view engine'))

/** Step-2: Tell Express which folder to look for serving files: by default it is views folder */
console.log(app.get('views'))

/** Step-3: Setup Routes to serve dynamic sites with ejs */
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/services', (req, res) => {
  res.render('services')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
