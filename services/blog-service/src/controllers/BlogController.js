const sequelize = require('../../db'); // Importa tu conexión a la base de datos
const ComentarioModel = require('../model/Comentario')(sequelize);

// Obtener todos los comentarios para un lugar específico
exports.getAllComentarios = async (req, res) => {
    try {
        const { lugarId } = req.params;
        const comentarios = await ComentarioModel.findAll({ where: { LugarID: lugarId } });

        if (comentarios.length === 0) {
            return res.status(404).json({ error: "No se encontraron comentarios para este lugar." });
        }

        res.status(200).json(comentarios);
    } catch (error) {
        console.error('Error al obtener comentarios:', error);
        res.status(500).json({ error: "Error al obtener comentarios" });
    }
};

// Crear un nuevo comentario
exports.createComentario = async (req, res) => {
    try {
        const { LugarID, UsuarioID, NombreUsuario, NombreLugar, Comentarios } = req.body;

        const nuevoComentario = await ComentarioModel.create({
            LugarID,
            UsuarioID,
            NombreUsuario,
            NombreLugar,
            Comentarios,
        });

        res.status(201).json(nuevoComentario);
    } catch (error) {
        console.error('Error al crear comentario:', error);
        res.status(500).json({ error: "Error al crear comentario" });
    }
};
