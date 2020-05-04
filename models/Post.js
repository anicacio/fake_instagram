const Post = (sequelize, Datatypes) => {
    let post = sequelize.define(
        'Post', {
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
            img: {
                type: Datatypes.STRING,
                allowNull: false,
            },
            usuarios_id: {
                type: Datatypes.INTEGER,
                allowNull: false,
            },
            n_likes: {
                type: Datatypes.INTEGER,
                allowNull: false,
            }
        }, {
            tableName: 'posts',
            timestamps: false
        }
    );
    post.associate = (models) => {
        post.hasMany(models.Comentario, {
            foreignKey:'posts_id',
            as:'comentarios'
        })
    };
    return post;
};

module.exports = Post;