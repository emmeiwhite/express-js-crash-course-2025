import express from 'express'
import products from '../api-data/products.js'

const router = express.Router()

router.get('/products', (req, res) => {
  res.render('products', {
    title: 'products Page'
  })
})

router.get('/api/products', (req, res) => {
  res.json({ products })
})

export default router
