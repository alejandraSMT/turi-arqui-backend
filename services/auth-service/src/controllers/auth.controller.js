const axios = require('axios');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/auth.config.js');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar entrada
        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son requeridos.' });
        }

        // Consultar el user-service para obtener al usuario
        const response = await axios.post('http://kong:8000/user-service/api/verify', {
            email,
            password,
        });

        const user = response.data;
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Generar un token JWT
        const token = jwt.sign(
            { id: user.id, role: user.roleID, isPremium: user.isPremium },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        res.status(200).json({ token, expiresIn: JWT_EXPIRES_IN });
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión.', error: error.message });
    }
};


module.exports = { login };
