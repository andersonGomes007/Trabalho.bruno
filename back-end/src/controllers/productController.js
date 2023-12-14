'user strict'
const ProductModel = require('../models/productModel');
const jsonWebToken = require('jsonwebtoken');

const productController = {
  getProducts: async (req, res) => {
      const result = await ProductModel.find({});
      res.status(200).json(result);
    },

  createProduct: async (req, res) => {
      await ProductModel.create(req.body);
      res.status(201).json({ message: 'Produto Criado' });
    },

  deleteProduct: async (req, res) => {
      const { product } = req.params;
      await ProductModel.Delete(product);
      res.status(200).json({ message: 'Produto deletado' });
    },

  updateProduct: async (req, res) => {
      const { product } = req.params;
      const updatedData = req.body;
      await ProductModel.Update(product, updatedData, { new: true });
      res.status(200).json({ message: 'Produto atualizado' });
  
    },

  auth: async (req, res) => {
      const { login, password } = req.body;
      const result = await ProductModel.findOne({ login, password });
      if (result) {
        const secret = process.env.secret;
        const token = await jsonWebToken.sign(req.body, secret);
        res.set('Acsses-Token', token);
        res.end();
      } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
      }
    }
}

module.exports = productController;
 