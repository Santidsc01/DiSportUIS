const express = require('express');
const router = express.Router();
const { createReservation } = require('../controllers/reservaController');


router.post('/reservations', createReservation);

module.exports = router;
