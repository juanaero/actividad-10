const express = require('express');
const cors = require('cors');
const bodyparse = require('body-parser')
const app = express();
const {conectarDB }= require('./index')


//declarar rutas
const routes = require('./routes/routes')



//MIDDLEWARES
app.use(express.json());
app.use(cors());


//consumo de rutas
app.use('/api/estudiantes',routes)




module.exports = app;