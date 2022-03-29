const mongoose = require('mongoose');
const Product = require('../models/product');

exports.getNewProduct = (req, res) => {
    res.render('newProduct');
}

exports.postNewProduct = async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        amountInStorage: req.body.amountInStorage,
        category: req.body.category,
        gender: req.body.gender,
        brand: req.body.brand
    });

    await newProduct.save();
    res.redirect('new')
}