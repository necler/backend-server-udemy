//import

//import express from 'express';

// Requires
var express = require('express');
var mongoose = require('mongoose');


//Inicializar variables

var app = express();


//Conexión a la base de datos

//decrepado
/*
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', function(err, res) {

    if (err) throw err;

    console.log('Base de datos:\x1b[32m%s\x1b[0m', ' online');

});
*/

mongoose.connect('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true });
//mongoose.connect('mongodb://localhost:27017/hospitalDB', { useUnifiedTopology: true });



//Rutas 

app.get('/', function(req, res, next) {

    res.status(200).json({

        ok: true,
        mensaje: 'Petición realizada correctamente'
    });

});

//Escuchar peticiones

app.listen(3000, function() {

    console.log('Express server puerto 3000:\x1b[32m%s\x1b[0m', ' online');
});