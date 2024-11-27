const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/BlogController');

// Endpoint para obtener todos los comentarios por lugar
router.get('/getComentarios/:lugarId', BlogController.getAllComentarios);

// Endpoint para crear un nuevo comentario
router.post('/createComentario', BlogController.createComentario);

module.exports = router;
