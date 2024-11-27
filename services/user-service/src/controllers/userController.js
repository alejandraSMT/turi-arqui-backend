const { User } = require('../models');
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { username, password, first_name, last_name, phone_number, email, genderId, roleId } = req.body;

        // Verificar si el username o email ya existen
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [{ username }, { email }],
            },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'El username o email ya están en uso.' });
        }

        // Crear usuario
        const user = await User.create({
            username,
            password,
            first_name,
            last_name,
            phone_number,
            email,
            genderID: genderId,
            roleID: roleId,
        });

        res.status(201).json({ message: 'Usuario creado exitosamente.', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserByEmailAndPassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar entrada
        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son requeridos.' });
        }

        // Buscar usuario por email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Verificar contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        // Devolver datos del usuario
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser, getUserByEmailAndPassword };
