const sequelize = require('../../db'); // Importa tu conexión a la base de datos
const ComentarioModel = require('../model/Comentario')(sequelize);

// Obtener todos los comentarios para un lugar específico
exports.getAllComentarios = async (req, res) => {
    try {
        // Obtener todos los comentarios sin filtro por LugarID
        const comentarios = await ComentarioModel.findAll();

        if (comentarios.length === 0) {
            return res.status(404).json({ error: "No se encontraron comentarios." });
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
        const { NombreLugar, NombreUsuario, FotoLugar, Hashtag, Comentario } = req.body;

        // Validación básica
        if (!NombreLugar || !NombreUsuario || !Comentario) {
            return res.status(400).json({ error: "NombreLugar, NombreUsuario y Comentario son obligatorios." });
        }

        const nuevoComentario = await ComentarioModel.create({
            NombreLugar,
            NombreUsuario,
            FotoLugar,
            Hashtag,
            Comentario,
        });

        res.status(201).json(nuevoComentario);
    } catch (error) {
        console.error('Error al crear comentario:', error);
        res.status(500).json({ error: "Error al crear comentario" });
    }
};
