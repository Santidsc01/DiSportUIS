const Reserva = require('../models/reserva');
    const mongoose = require('mongoose');

    // Lista de IDs de horarios disponibles en la base de datos
    const horariosDisponibles = [
        '6681dcf2c62742942c281c11',
        '6681dcf7c62742942c281c13',
        '6681dcfcc62742942c281c15',
        '6681dd01c62742942c281c17',
        '6681dd05c62742942c281c19',
        '6681dd09c62742942c281c1b',
        '6681dd0dc62742942c281c1d',
        '6681dd15c62742942c281c1f'
    ];

    // Controlador para obtener la disponibilidad de una cancha en una fecha específica
    const getDisponibilidad = async (req, res) => {
        const { idcancha, fecha } = req.query;

        if (!idcancha || !fecha) {
            return res.status(400).json({ error: 'Se requiere idcancha y fecha.' });
        }

        try {
            // Validar formato de fecha (opcional, dependiendo de cómo se maneje en tu aplicación)
            const date = new Date(fecha);

            // Obtener todas las reservas para la cancha y la fecha especificadas
            const reservas = await Reserva.find({
                idcancha: new mongoose.Types.ObjectId(idcancha),
                fecha: date
            }).lean().exec();

            // Inicializar todas las franjas horarias como disponibles
            const disponibilidad = {};
            horariosDisponibles.forEach(idHorario => {
                disponibilidad[idHorario] = true; // Inicialmente todas disponibles
            });

            // Actualizar la disponibilidad según las reservas existentes
            reservas.forEach(reserva => {
                if (reserva.idhorario in disponibilidad) {
                    disponibilidad[reserva.idhorario] = false; // Marcar como no disponible si hay reserva
                }
            });

            res.status(200).json({ disponibilidad });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    module.exports = {
        getDisponibilidad
    };