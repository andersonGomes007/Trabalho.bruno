'use strict'

const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')

productRouter.route('/api/product')
    .get((req, res) => productController.getProducts(req, res))
    .post((req, res) => productController.createProduct(req, res))
    .put((req, res) => productController.updateProduct(req, res))
    .delete((req, res) => productController.deleteProduct(req, res))

module.exports = productRouter