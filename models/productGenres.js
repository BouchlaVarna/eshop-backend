const {sequelize, Sequelize} = require('../db.js');
const { DataTypes } = require('sequelize');
const Genre = require('./genre');
const Product = require('./product');

const ProductGenres = sequelize.define('ProductGenres', {
    ProductID: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    GenreID: {
        type: DataTypes.INTEGER,
        references: {
            model: Genre,
            key: 'id'
        }
    }
});

ProductGenres.sync();

module.exports = ProductGenres;