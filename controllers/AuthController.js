const {Usuario} = require('../models');
const bcrypt = require('bcrypt');

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
        console.log(req.session.usuario);
    },
    
    login: async (req,res) => {
        // Ler body
        const {email, senha} = req.body;

        // Carregar usuário
        const user = await Usuario.findOne({ where: {email} });

        // Verificar se existe usuário
        if(!user) {
            res.redirect('/login?erro=1');
        };

        // Validar senha
        if(!bcrypt.compareSync(senha, user.senha)) {
            res.redirect('/login?erro=1');
        };

        // Setar session
        req.session.usuario = user;

        // Redirecionar /home
        res.redirect('/home');

    }
};
module.exports = AuthController;