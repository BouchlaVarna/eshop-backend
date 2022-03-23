const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

//GET
router.get('/new', productController.getNewProduct);

//POST
router.post('/new', productController.postNewProduct);

module.exports = router;