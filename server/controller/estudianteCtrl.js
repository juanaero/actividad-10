const mongoose = require('mongoose');
const Estudiante = require('../models/estudiante');


//crear estudiante//
function crearEstudiante(req, res) {
    var estudiante = new Estudiante();
    var parametros = req.body;

    estudiante.nombreEstudiante = parametros.nombreEstudiante;
    estudiante.estado = parametros.estado;
    estudiante.edad = parametros.edad;
    estudiante.curso = parametros.curso
    estudiante.save((err, estudianteNuevo) => {

        if (err) {
            res.status(500).send({ message: "error del servidor" });

        } else {
            if (!estudianteNuevo) {
                res.status(200).send({ message: "no fue posible el registro del estudiante" })


            } else {
                res.status(200).send({
                    status: 'Estudiante Creado',
                    estudiante: estudianteNuevo

                });
            }
        }
    })

}


//obtener estudiante//
function obtenerEstudiante(req, res) {
    Estudiante.find((err, estudianteobtenido) => {
        if (err) {
            res.status(500).send({ message: "error del servidor" });

        } else {

            if (!estudianteobtenido) {
                res.status(200).send({ message: "no fue posible el encontrar el estudiante" });


            } else {
                res.status(200).send({
                    status: 'Estudiante Encontrado',
                    estudiante: estudianteobtenido

                });
            }
        }
    })

}



//actualizar estudiante//
function Update(req,res) {

    var id = req.params.id;
    var Update = req.body;

    Estudiante.findByIdAndUpdate(id, Update, {new: true})
    .then((estudiante) => {
if(!estudiante) {
    return res.status(404).send({
message: "no user found",
});

}
res.status(200).send({
    message: "estudiante actualizado"

});
})

.catch((err)=>{

return res.status(404).send({

    message: "error al actualizar",


});

});


}; 

 

//eliminar estudiante//

function eliminarEstudiante(req, res) {

    var estudianteId = req.params.id;

    Estudiante.findByIdAndDelete(estudianteId, (err, estudianteEliminado) => {

        if (err) {
            res.status(500).send({ message: "error del servidor" });

        } else {
            if (!estudianteEliminado) {
                res.status(404).send({ message: "no fue posible eliminar el estudiante" })


            } else {
                res.status(200).send({
                    status: 'Estudiante Eliminado',
                    estudiante: estudianteEliminado

                });
            }
        }
    })

}




//exportamos las funciones//


module.exports = {

    crearEstudiante,
    obtenerEstudiante,
    Update,
    eliminarEstudiante

}