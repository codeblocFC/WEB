const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const indexRoutes = require('./routes/index');
//const port = 3000;

//configuraciones
app.set('port', process.env.PORT);
mongoose.connect('mongodb+srv://root:toor@cluster0.zvefk.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(db => console.log('Connected'))
    .catch(err => console.log(err));
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//rutas
app.use('/items/', indexRoutes);

//inicializacion server
//app.listen(port, () => 
app.listen(app.get('port'),() =>{
    console.log('Server started!');
});