const ComentarioModel = require('../models/ComentarioModel');

// Obtener todos los comentarios
exports.getAllComentarios = async (req, res) => {
    try {
        const comentarios = await ComentarioModel.getAllComentarios();
        res.status(200).json(comentarios);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error);
        res.status(500).json({ error: "Error al obtener los comentarios" });
    }
};

// Crear un nuevo comentario
exports.createComentario = async (req, res) => {
    try {
        const { LugarID, UsuarioID, NombreUsuario, NombreLugar, Comentarios, Puntuacion, FotoLugar } = req.body;

        // Validación simple
        if (!LugarID || !UsuarioID || !NombreUsuario || !NombreLugar || !Comentarios || !Puntuacion) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const nuevoComentario = await ComentarioModel.createComentario({
            LugarID,
            UsuarioID,
            NombreUsuario,
            NombreLugar,
            Comentarios,
            Puntuacion,
            FotoLugar
        });

        res.status(201).json(nuevoComentario);
    } catch (error) {
        console.error('Error al crear el comentario:', error);
        res.status(500).json({ error: "Error al crear el comentario" });
    }
};
