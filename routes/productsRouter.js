import express from 'express'
import products from '../api-data/products.js'

const router = express.Router()

// This is to render the products page
router.get('/products', (req, res) => {
  res.render('products', {
    title: 'products Page'
  })
})

/** --- 1. API Get Products ---  */
router.get('/api/products', (req, res) => {
  res.json({ products })
})

/** --- 2. API POST Request | Create resource ---  */
router.post('/api/products', (req, res) => {
  const product = req.body
  console.log(product)
  console.log('New product received:', product)
  products.push(product)
  res.status(201).json({ message: 'Product added successfully', product })
})
export default router
