const { DataTypes } = require('sequelize'); // Importa DataTypes

module.exports = (sequelize) => {
    return sequelize.define('Comentario', {
        ComentarioID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        LugarID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        UsuarioID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        NombreUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NombreLugar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Comentarios: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false,
        },
        FotoLugar: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'comentarios',
        timestamps: false, // Opcional: si no usas createdAt y updatedAt
    });
};
