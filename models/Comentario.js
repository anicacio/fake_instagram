const Comentario = (sequelize, Datatypes) => {

    return sequelize.define(
        'Comentario', {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: Datatypes.STRING,
                allowNull: false,
            },
            usuarios_id: {
                type: Datatypes.INTEGER,
                allowNull: false,
            },
            posts_id: {
                type: Datatypes.INTEGER,
                allowNull: false,
            }
        }, {
            tableName: 'comentarios',
            timestamps: false
        }
    )
};

module.exports = Comentario;