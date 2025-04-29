import express from 'express'

const app = express()

const PORT = process.env.PORT || 4000

// 1. Routing
app.get('/health', (req, res) => {
  console.log(req.query)
  /* --
  console.log('Infrastructure health report being checked')
  res.send('Hey! I am healthy')
  -- */

  // Sending Back JSON response --- means content-type:application/json

  res.status(400).send({ message: 'One machine is down', success: true })
})

// 2. Sending data from client to server (body object)
app.post('/api/users', (req, res) => {
  const body = req.body
  console.log('body', body)
  res.json({})
})

app.listen(PORT, () => console.log(`server is listening on port: ${PORT} `))
