const Sequelize = require('sequelize');
const manufacturersModel = require('./manufacturersModel');
const productsModel = require('./productsModel')
const allConfigs = require('../configs/sequelize')


const environment = process.env.NODE_ENV || 'development'
const { database, username, password, dialect, host } = allConfigs[environment]


const connection = new Sequelize(database, username, password, {
  host,
  dialect,
});


const Manufacturers = manufacturersModel(connection, Sequelize)
const Products = productsModel(connection, Sequelize, Manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = { Manufacturers, Products }