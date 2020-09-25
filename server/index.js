const { express } = require('express');
const app = require('./app');
//EL SERVIDOR//
const mongoose = require('mongoose');


const conectarDB = () => {

    mongoose.connect('mongodb://localhost:27017/estudiantes', { useNewUrlParser: true, useUnifiedTopology: true },
        (error) => {
            if (error) {
                console.log('Error', error)
            } else {
                console.log('conectado')
            }

        })


}

conectarDB()


app.listen(3000,()=>{
console.log('servidor funciona correctamente')
})






