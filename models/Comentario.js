const Comentario = (sequelize, Datatypes) => {

    let comentario = sequelize.define(
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
    );
    comentario.associate = (models) => {
        comentario.belongsTo(models.Post, {
            foreignKey:'posts_id', 
            as:'post'
        })
    };
    return comentario;
};

module.exports = Comentario;