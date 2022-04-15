const {sequelize, Sequelize} = require('../db.js');
const { DataTypes } = require('sequelize');
const Genre = require('./genre')

const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    info: DataTypes.TEXT,
    price: DataTypes.BIGINT,
});

Product.belongsToMany(Genre, { through: 'ProductGenres' })
Genre.belongsToMany(Product, { through: 'ProductGenres' })

Product.sync()

module.exports = Product