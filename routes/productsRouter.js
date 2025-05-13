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

router.post('/api/products', (req, res) => {
  const product = req.body
  console.log('New product received:', product)
  products.push(product)
  res.status(201).json({ message: 'Product added successfully', product })
})
export default router
