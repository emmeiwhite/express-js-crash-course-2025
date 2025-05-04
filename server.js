import express from 'express'

const app = express()

/** --- Logger Middleware  --- */
const reqLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toISOString()}`)

  next()
}

// 3. We have to enable body parser in Express to parse body data coming from the client
app.use(express.json())

//
app.use(reqLogger)

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

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server is listening on port: ${PORT} `))
