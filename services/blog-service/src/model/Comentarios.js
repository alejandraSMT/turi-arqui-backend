const pool = require('../config/database');

// Obtener todos los comentarios
const getAllComentarios = async () => {
    const query = `
        SELECT "ComentarioID", "LugarID", "UsuarioID", "NombreUsuario", "NombreLugar", "Comentarios", "Puntuacion", "FotoLugar"
        FROM "Comentarios"
    `;
    const result = await pool.query(query);
    return result.rows;
};

// Crear un nuevo comentario
const createComentario = async (comentarioData) => {
    const { LugarID, UsuarioID, NombreUsuario, NombreLugar, Comentarios, Puntuacion, FotoLugar } = comentarioData;

    const query = `
        INSERT INTO "Comentarios" 
        ("LugarID", "UsuarioID", "NombreUsuario", "NombreLugar", "Comentarios", "Puntuacion", "FotoLugar")
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `;
    const values = [LugarID, UsuarioID, NombreUsuario, NombreLugar, [Comentarios], Puntuacion, FotoLugar];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = {
    getAllComentarios,
    createComentario,
};
