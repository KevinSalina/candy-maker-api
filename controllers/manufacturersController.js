const models = require('../models')
const { Op } = require('sequelize')

const getAllManufacturers = async (req, res) => {
  const allProdcuts = await models.Manufacturers.findAll({
    include: [{
      model: models.Products
    }]
  })

  res.send(allProdcuts)
}

const getManufacturersByName = async (req, res) => {
  const { name } = req.params
  const manufacturerByName = await models.Manufacturers.findOne({
    where: { name: { [Op.substring]: `${name}` } },
    attributes: ['id', 'name', 'country'],
    include: [{
      model: models.Products,
      attributes: ['id', 'name', 'yearIntroduced']
    }]
  })

  return manufacturerByName ? res.send(manufacturerByName) : res.sendStatus(404).send('manufacturer not found')
}

module.exports = { getAllManufacturers, getManufacturersByName }