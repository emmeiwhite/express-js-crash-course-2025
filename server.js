import express from 'express'
const app = express()

import mainRouter from './routes/index.js'
app.set('view engine', 'ejs')

app.use(mainRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
