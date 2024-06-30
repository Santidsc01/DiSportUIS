const express = require('express')
const {addCancha, getCancha} =require('../controllers/canchaController')

const api = express.Router()


api.post('/cancha', addCancha)
api.get('/cancha', getCancha)

module.exports = api