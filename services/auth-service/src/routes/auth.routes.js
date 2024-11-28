const express = require('express');
const { login } = require('../controllers/auth.controller.js');
const { verifyToken } = require('../middlewares/authJwt');

const router = express.Router();

// Ruta para login
router.post('/login', login);
router.get('/verify', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Acceso autorizado.', user: req.user });
});

module.exports = router;
