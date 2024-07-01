const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CanchaSchema = new Schema({
    nombre:{
        type: String,
        require: true
    }
}, {
    timestamps: true,
    versionKey: false
});  

const Cancha = mongoose.model('Cancha', CanchaSchema);

module.exports = Cancha;
