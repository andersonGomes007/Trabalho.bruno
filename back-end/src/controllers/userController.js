// favoritos 1
//chat 1
//carrinho de compras 1
//
'user strict'

const userModel = require('../models/userModel')
const jsonWebToken = require('jsonwebtoken')
const userController = {
    getUsers: async (req, res) => {
        const result = await userModel.find({})
        res.status(200).json(result)
    },
    getUser: async (req, res) => {
        const result = await userModel.findOne({ email })
        res.status(200).json(result)
    },
    createUser: async (req, res) => {
        await userModel.create(req.body)
        res.status(201).json({ message: "Usuario Criado" })
    },
    deleteUser: async (req, res) => {
        try {
            const userEmail = req.body.email;
            await userModel.findOneAndDelete({ email: userEmail });
            res.status(200).json({ message: "Usuário excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao excluir usuário" });
        }
    },
    updateUser: async (req, res) => {
        try {
            const userEmail = req.body.email;
            const updatedUserData = req.body.updatedData;
    
            await userModel.findOneAndUpdate({ email: userEmail }, updatedUserData);
            res.status(200).json({ message: "Usuário atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar usuário" });
        }
    },
    
    auth: async (req, res) => {
        const result = await userModel.findOne({ login: req.body.login, password: req.body.password })
        if (result) {
            const secret = process.env.secret
            const token = await jsonWebToken.sign(req.body, secret)
            res.set('Access-Token', token)
            res.end()
        }
    }
}

module.exports = userController