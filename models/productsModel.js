const productsModel = (connection, Sequelize, manufacturers) => {
  return connection.define('products', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    yearIntroduced: {
      type: Sequelize.DATEONLY
    },
    manufacturerId: {
      type: Sequelize.INTEGER,
      reference: { model: manufacturers, key: 'id' }
    }
  }, { paranoid: true })
}

module.exports = productsModel