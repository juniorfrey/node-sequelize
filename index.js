 
 const express = require('express');

 var app = express();

 //MEOTODOS DE SOLICITUDES HTTP
 //Peticion get
 app.get('/', (pet, res) => {
   res.send('ruta de inicio')
 });

 app.get('/contacto', (pet, res) => {
    res.send('ruta de contacto')
  });

 app.listen(5000, (pet, res) => {
    console.log('Hola mundo');
 });
 
 /* var http = require('http');
 var colors = require('colors'); */

 // crear servidor
 /* var servidor = http.createServer( (peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    respuesta.write('<h3>Server Básico con NODE JS</h3>');
    console.log('Petición WEB');
    respuesta.end();
 });

 servidor.listen(5000);
 console.log('Ejecuntando servidor'); */

/*  var prueba = require('./funciones/funcion');
prueba.suma(3,6);
prueba.resta(7,3); */