const { sequelize, Comentario } = require('../models');

Post.findByPk(
    {
        include: [
            'post',
            'usuario'
        ]
    }
).then(
    post => {
        post.getComentarios().then(
            (comentarios) => {
                console.log(comentarios.map(comentario => comentario.toJSON()));
                sequelize.close();
            }
        );
    }
)