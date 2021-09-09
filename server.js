const express = require('express')
const app = express()
const { getAllProducts, getProductsByName } = require('./controllers/productsController')
const { getAllManufacturers, getManufacturersByName } = require('./controllers/manufacturersController')

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/products', getAllProducts)

app.get('/products/:name', getProductsByName)

app.get('/manufacturers', getAllManufacturers)

app.get('/manufacturers/:name', getManufacturersByName)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

