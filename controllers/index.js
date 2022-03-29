const Product = require('../models/product');

//exports.getIndex = (req, res) => {}

exports.getRecentProducts = async (req, res) => {
    const products = await Product.find().limit(3);

    res.send(products);
}