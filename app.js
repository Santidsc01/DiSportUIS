const express = require('express');
const bodyParser = require('body-parser');

const canchasRoute = require('./routes/cancha');
const reservationRoutes = require('./routes/reservaRoutes');
const horariosRoute = require('./routes/horarioRoutes'); 

const app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use('/v1', canchasRoute);
app.use('/v1', reservationRoutes);
app.use('/v1', horariosRoute); 

module.exports = app;