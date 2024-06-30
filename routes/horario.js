const express = require('express');
const router = express.Router();
const { addHorario, getHorarios } = require('../controllers/horarioController');

// Ruta para agregar un nuevo horario
router.post('/horarios', addHorario);

// Ruta para obtener todos los horarios
router.get('/horarios', getHorarios);

module.exports = router;
