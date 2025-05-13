import express from 'express'
const app = express()

import mainRouter from './routes/index.js'
import productsRouter from './routes/productsRouter.js'
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
/** Registering our routers */
app.use(productsRouter)
app.use(mainRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
