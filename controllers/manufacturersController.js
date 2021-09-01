const models = require('../models')


const getAllManufacturers = async (req, res) => {
  const allProdcuts = await models.Manufacturers.findAll({
    include: [{
      model: models.Products
    }]
  })

  res.send(allProdcuts)
}

const getManufacturersById = async (req, res) => {
  const { id } = req.params
  const manufacturerById = await models.Manufacturers.findOne({
    where: { id },
    include: [{
      model: models.Products
    }]
  })

  return manufacturerById ? res.send(manufacturerById) : res.sendStatus(404).send('manufacturer not found')
}

module.exports = { getAllManufacturers, getManufacturersById }