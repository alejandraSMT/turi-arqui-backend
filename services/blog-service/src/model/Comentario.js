const { DataTypes } = require('sequelize'); // Importa DataTypes

module.exports = (sequelize) => {
    return sequelize.define('Comentario', {
        ComentarioID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        NombreLugar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NombreUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FotoLugar: {
            type: DataTypes.STRING(500), // URL o ruta de la foto
            allowNull: true,
        },
        Comentario: {
            type: DataTypes.TEXT, // Un único comentario por registro
            allowNull: false,
        },
        Hashtag: {
            type: DataTypes.STRING(50), // Hashtag relacionado
            allowNull: true,
        },
    }, {
        tableName: 'comentarios',
        timestamps: false, // Opcional: si no usas createdAt y updatedAt
    });
};
