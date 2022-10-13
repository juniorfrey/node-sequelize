 var http = require('http');
 var colors = require('colors');

 // crear servidor
 var servidor = http.createServer( (peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    respuesta.write('<h3>Server Básico con NODE JS</h3>');
    console.log('Petición WEB');
    respuesta.end();
 });

 servidor.listen(5000);
 console.log('Ejecuntando servidor');

/*  var prueba = require('./funciones/funcion');
prueba.suma(3,6);
prueba.resta(7,3); */