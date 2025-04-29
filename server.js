import express from 'express'

const app = express()

const PORT = process.env.PORT || 4000

// 1. Routing
app.get('/health', (req, res) => {
  console.log('Infrastructure health report being checked')
  res.send('Welcome to Coders Bank')
})

app.listen(PORT, () => console.log(`server is listening on port: ${PORT} `))
