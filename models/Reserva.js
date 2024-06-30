const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    codigoestudiante: {
        type: Number,
        required: true
    },
    idcancha: {
        type: Schema.Types.ObjectId,
        ref: 'Cancha', // Ajusta 'Cancha' al nombre correcto del modelo de Cancha
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    idhorario: {
        type: Schema.Types.ObjectId,
        ref: 'Horario', // Ajusta 'Horario' al nombre correcto del modelo de Horario
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const Reserva = mongoose.model('Reserva', ReservaSchema);

module.exports = Reserva;
