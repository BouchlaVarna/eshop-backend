const {sequelize, Sequelize} = require('../db.js');
const { DataTypes } = require('sequelize');
const Product = require('./product');

const Category = sequelize.define('Category', {
    name: DataTypes.STRING
});

Category.hasMany(Product);
Product.belongsTo(Category);

Category.sync()

module.exports = Category