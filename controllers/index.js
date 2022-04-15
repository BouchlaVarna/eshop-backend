const {sequelize, Sequelize} = require('../db.js');
const DataTypes = require('sequelize');
const Genre = require('../models/genre');
const Product = require('../models/product');
const Category = require('../models/category')

exports.getRecentProducts = async (req, res) => {
    res.render('index')
}