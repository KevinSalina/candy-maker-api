const express = require('express')
const app = express()
const { getAllProducts, getProductsById } = require('./controllers/productsController')
const { getAllManufacturers, getManufacturersById } = require('./controllers/manufacturersController')

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/products', getAllProducts)

app.get('/products/:id', getProductsById)

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:id', getManufacturersById)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})