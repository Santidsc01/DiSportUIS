const express = require('express');
const router = express.Router();
const {  getDisponibilidad } = require('../controllers/disponibilidadController');

router.get('/disponibilidad', getDisponibilidad);

module.exports = router;
