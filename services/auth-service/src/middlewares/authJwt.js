const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/auth.config.js');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No se proporcionó un token.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Añade los datos del token al objeto req
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado.' });
    }
};

module.exports = { verifyToken };
