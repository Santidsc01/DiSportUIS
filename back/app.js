const express = require('express');
const bodyParser = require('body-parser');

const canchasRoute = require('./routes/cancha');
const reservationRoutes = require('./routes/reserva');
const horariosRoute = require('./routes/horario'); 
const disponibilidadRoute =require('./routes/disponibilidad')

const app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use('/v1', canchasRoute);
app.use('/v1', reservationRoutes);
app.use('/v1', horariosRoute); 
app.use('/v1', disponibilidadRoute)

module.exports = app;