//esquema estructura//
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const EstudianteSchema = new Schema({
    nombreEstudiante: String,
    estado: String,
    curso: String,
    edad: Number

});

module.exports = mongoose.model('Estudiante', EstudianteSchema);