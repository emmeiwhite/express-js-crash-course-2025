import express from 'express'

const router = express.Router()

router.get('/products', (req, res) => {
  res.render('products', {
    title: 'products Page'
  })
})

export default router
