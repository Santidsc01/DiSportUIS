const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const ReservaSchema = new Schema({
        codigoestudiante: {
            type: Number,
            required: true
        },
        idcancha: {
            ref: 'Cancha',
            required: true,
            type: Schema.Types.ObjectId
        },
        fecha: {
            type: Date,
            required: true
        },
        idhorario: {
            ref: 'Horario',
            required: true,
            type: Schema.Types.ObjectId
        },
        disponible: {
            type: Boolean,
            default: true
        }
    }, {
        timestamps: true,
        versionKey: false
    });

    const Reserva = mongoose.model('Reserva', ReservaSchema);

    module.exports = Reserva;

