const express = require('express');
const estudianteCtrl = require('../controller/estudianteCtrl');

var api = express.Router()

//ruta agregar Student//
api.post('/', estudianteCtrl.crearEstudiante);
//ruta consultar Student//
api.get('/', estudianteCtrl.obtenerEstudiante);
//ruta actualizar Student//
api.put('/:id', estudianteCtrl.Update);
//ruta eliminar Student//
api.delete('/:id', estudianteCtrl.eliminarEstudiante);

module.exports = api;
