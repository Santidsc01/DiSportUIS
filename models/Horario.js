const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HorarioSchema = new Schema({
    rango: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const Horario = mongoose.model('Horario', HorarioSchema);

module.exports = Horario;
