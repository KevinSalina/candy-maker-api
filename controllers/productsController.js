const models = require('../models')
const { Op } = require('sequelize')


const getAllProducts = async (req, res) => {
  const allProdcuts = await models.Products.findAll({
    include: [{
      model: models.Manufacturers
    }]
  })

  res.send(allProdcuts)
}

const getProductsByName = async (req, res) => {
  const { name } = req.params
  const productByName = await models.Products.findOne({
    where: { name: { [Op.substring]: `${name}` } },
    attributes: ['id', 'name', 'yearIntroduced'],
    include: [{
      model: models.Manufacturers,
      attributes: ['id', 'name', 'country']
    }]
  })

  return productByName ? res.send(productByName) : res.sendStatus(404).send('Product not found')
}

module.exports = { getAllProducts, getProductsByName }