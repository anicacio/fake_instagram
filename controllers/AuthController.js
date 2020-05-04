const {Usuario, Post, Comentario} = require('../models');
const bcrypt = require('bcrypt');

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: async (req,res) => {
        let posts = await Post.findAll(
            {
                include: [
                    {
                        model: Comentario,
                        as: 'comentarios',
                        include: 'usuario'
                    },
                    'usuario'
                ]
            }
        );

        res.render('index', {posts});
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