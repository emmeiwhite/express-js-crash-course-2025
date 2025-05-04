import express from 'express'

const app = express()

// Setting our Routes

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(3000, () => console.log(`Server is listening on port: 3000`))
