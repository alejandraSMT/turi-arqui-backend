const express = require('express');
const { registerUser, getUserByEmailAndPassword } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', getUserByEmailAndPassword);

module.exports = router;
