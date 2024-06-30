const Horario = require('../models/Horario');

async function addHorario(req, res) {
    try {
        const { rango } = req.body;
        const horario = new Horario({
            rango
        });

        const horarioGuardado = await horario.save();
        res.status(201).send({ horarioGuardado });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

async function getHorarios(req, res) {
    try {
        const horarios = await Horario.find().lean().exec();
        res.status(200).send({ horarios });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
}

module.exports = {
    addHorario,
    getHorarios
};
