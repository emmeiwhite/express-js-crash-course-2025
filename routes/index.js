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

export default router
