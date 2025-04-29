import express from 'express'

const app = express()

const PORT = process.env.PORT || 4000

// 1. Routing
app.get('/health', (req, res) => {
  /* --
  console.log('Infrastructure health report being checked')
  res.send('Hey! I am healthy')
  -- */

  // Sending Back JSON response --- means content-type:application/json

  res.status(400).send({ message: 'One machine is down', success: true })
})

app.listen(PORT, () => console.log(`server is listening on port: ${PORT} `))
