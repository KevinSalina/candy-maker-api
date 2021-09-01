const models = require('../models')


const getAllProducts = async (req, res) => {
  const allProdcuts = await models.Products.findAll({
    include: [{
      model: models.Manufacturers
    }]
  })

  res.send(allProdcuts)
}

const getProductsById = async (req, res) => {
  const { id } = req.params
  const productById = await models.Products.findOne({
    where: { id },
    include: [{
      model: models.Manufacturers
    }]
  })

  return productById ? res.send(productById) : res.sendStatus(404).send('Product not found')
}

module.exports = { getAllProducts, getProductsById }