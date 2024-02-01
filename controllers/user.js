const User = require("../models/user");
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { existsEmail, existsLogin } = require("../validators/db-validators");

const createUser = async (req, res) => {
const errors = validationResult(req);

if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}
  const {
    name,
    login,
    email,
    password,
    rol,
  } = req.body;

try {
    // Validaciones de existencia
    await existsEmail(email, { req });
    await existsLogin(login, { req });

    // Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      login,
      email,
      password: hashedPassword,
      rol,
      active: true,  
    });

    await newUser.save();
    
    res.status(201).json(newUser);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

const deactivateUser = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: 'Id no válida' });
  }

  try {
    const user = await User.findByIdAndUpdate(userId, { active: false });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    res.status(200).json({ message: 'Usuario desactivado exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

module.exports = { createUser, deactivateUser };
