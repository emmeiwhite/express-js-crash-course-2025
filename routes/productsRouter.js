import express from 'express'
import { products } from '../api-data/products.js'

const router = express.Router()

// This is to render the products page, the view
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
  const { name, price } = req.body

  // Basic validation on the Server
  if (!name || !price) {
    return res.status(422).json({ error: 'Provide name and price ' })
  }

  const product = {
    name,
    price,
    id: new Date().toISOString()
  }

  products.push(product)

  console.log('Latest products are:')
  console.log(products)

  res.status(201).json({ message: 'Product added successfully', product })
})

export default router
