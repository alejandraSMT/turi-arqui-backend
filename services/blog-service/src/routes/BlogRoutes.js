const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

// Endpoint para obtener todos los comentarios
router.get('/comentarios', BlogController.getAllComentarios);

// Endpoint para crear un nuevo comentario
router.post('/comentarios', BlogController.createComentario);

module.exports = router;
