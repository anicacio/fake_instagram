const { sequelize, Usuario, Post, Comentario } = require('../models');

Usuario.findAll(
    {
        include: [
            {
            model: Post,
            as: 'posts',
            include: [
                {
                    model: Comentario,
                    as: 'comentarios',
                    include: 'usuario'
                },
                'usuario'
            ]
            }
        ]
    }

).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)