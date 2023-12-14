'user strict'

const CarrinhoModel = require('../models/carrinhoModel');
const jsonWebToken = require('jsonwebtoken');

const carrinhoController = {
    getCarrinhos: async (req, res) => {
        const result = await CarrinhoModel.find({});
        res.status(200).json(result);
    },

    getCarrinho: async (req, res) => {

        const { email } = req.query;
        const result = await CarrinhoModel.findOne({ email });
        res.status(200).json(result);

    },

    createCarrinho: async (req, res) => {
        await CarrinhoModel.create(req.body);
        res.status(201).json({ message: 'Produto Criado' });
    },

    deleteCarrinho: async (req, res) => {

        const { carrinho } = req.params;
        await CarrinhoModel.Delete(carrinho);
        res.status(200).json({ message: 'Carrinho deletado' });
    },

    updateCarrinho: async (req, res) => {

        const { carrinho } = req.params;
        const updatedData = req.body;
        await CarrinhoModel.Update(carrinho, updatedData, { new: true });
        res.status(200).json({ message: 'Carrinho atualizado' });

    },

    auth: async (req, res) => {
        try {
            const { login, password } = req.body;
            const result = await CarrinhoModel.findOne({ login, password });
            if (result) {
                const secret = process.env.secret;
                const token = await jsonWebToken.sign(req.body, secret);
                res.set('Acsses-Token', token);
                res.end();
            } else {
                res.status(401).json({ message: 'Credenciais inválidas' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = carrinhoController;