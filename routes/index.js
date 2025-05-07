import express from 'express'

const router = express.Router()

/** Step-3: Setup Routes to serve dynamic sites with ejs */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page'
  })
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'
  })
})

router.get('/services', (req, res) => {
  res.render('services', {
    title: 'Services Page'
  })
})

/** --- Sending back API JSON data --- */
router.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 59.99,
      image: 'https://via.placeholder.com/150',
      description: 'High-quality over-ear wireless headphones with noise cancellation.'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 129.99,
      image: 'https://via.placeholder.com/150',
      description: 'Feature-packed smart watch with fitness tracking and heart rate monitor.'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 39.99,
      image: 'https://via.placeholder.com/150',
      description: 'Portable speaker with powerful bass and 12-hour battery life.'
    },
    {
      id: 4,
      name: 'Gaming Mouse',
      price: 24.99,
      image: 'https://via.placeholder.com/150',
      description: 'Ergonomic gaming mouse with RGB lighting and programmable buttons.'
    },
    {
      id: 5,
      name: '4K Monitor',
      price: 299.99,
      image: 'https://via.placeholder.com/150',
      description: 'Ultra HD 27-inch monitor ideal for creatives and gamers alike.'
    }
  ]

  res.json(products)
})

export default router
