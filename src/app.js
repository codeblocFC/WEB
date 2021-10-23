const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authService = require('./services/auth.service');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors);

//middlewares
app.use(morgan('dev'))
app.use(cors())

//rutas
app.use('/auth', authRoutes)

//inicio servidor
app.listen(app.get('port'), () => {
    console.log('Server Running');
});