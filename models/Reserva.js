const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservaSchema = new Schema({
    codigoestudiante: {
        type: Number,
        require: true
    },
    idcancha:{
        ref: 'Cancha',
        require: true,
        type: Schema.Types.ObjectId
    },
    fecha:{
        type: Date,
        require: true
    },
    franja: {
        type: Schema.Types.ObjectId,
        ref: 'Horario',
        required: true
}}, {
    timestamps: true,
    versionKey: false
});

const Reserva = mongoose.model('Reserva', ReservaSchema);

module.exports = Reserva;
