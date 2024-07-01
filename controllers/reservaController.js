const Reserva = require('../models/reserva');
const mongoose = require('mongoose');

const createReservation = async (req, res) => {
    const { codigoestudiante, idcancha, fecha, idhorario } = req.body;

    try {
        const date = new Date(fecha);

        // Verificar si la cancha está disponible en la fecha y horario especificados
        const reservaExistente = await Reserva.findOne({
            idcancha: mongoose.Types.ObjectId(idcancha),
            fecha: date,
            idhorario: mongoose.Types.ObjectId(idhorario)
        });

        if (reservaExistente) {
            return res.status(409).json({ message: 'La cancha no está disponible en este horario.' });
        }

        // Crear nueva reserva y establecer disponible a false
        const nuevaReserva = new Reserva({
            codigoestudiante,
            idcancha,
            fecha: date,
            idhorario,
            disponible: false
        });

        // Guardar la reserva en la base de datos
        await nuevaReserva.save();

        res.status(201).json({ message: 'Reserva creada exitosamente', reserva: nuevaReserva });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReservation
};

