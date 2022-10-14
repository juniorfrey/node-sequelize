 
 const express = require('express');
 const {createPool} = require("mysql2/promise");
 var colors = require('colors');
 const Sequelize = require('sequelize');

/*  const sequelize = new Sequelize('usuarios_db','5mkuugphdba2sjcil0j0', 'pscale_pw_pyLsPqsQSKtrUcuz80mQq1UpohgtrmWK9bsWVLlQtvH',{
  host: 'us-east.connect.psdb.cloud',
  dialect :'mysql',
  dialectOptions: { ssl: {} }
 }); */


/*  sequelize.authenticate().then(() => {
    console.log('Conexion a la base de datos')
 }).catch(error => {
    console.log('El error de conexion es: ' + error)
 });

  // model
  const rolModel = sequelize.define('usuarios',{
    //"id":{type: Sequelize.INTEGER, primaryKey:true},
    "nombre": Sequelize.STRING
 });

 rolModel.findAll({attributes:['id','nombre']}).then(result => {
    const results = result[0];
    console.log(JSON.stringify(result[0]));
    console.log(results.id + ' - ' + results.nombre);
 }).catch(error => {
    console.log(error)
 }) */



 var app = express();
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());

 app.get('/contacto', (pet, res) => {
    res.send('ruta de contactows')
 });

  // crear conexcion
 /*  async function main() {
    const conn = await createPool({
      database: 'usuarios_db',
      user: '5mkuugphdba2sjcil0j0',
      host: 'us-east.connect.psdb.cloud',
      password: 'pscale_pw_pyLsPqsQSKtrUcuz80mQq1UpohgtrmWK9bsWVLlQtvH',
      ssl:{
        rejectUnauthorized: false,
      }
    });
    //conn.query('CREATE TABLE rol(name VARCHAR(50))')
    let result = await conn.query('SELECT * FROM usuarios');
      result[0].forEach((element) => {
          console.log(element.id + ' - ' + element.nombre);
          
      });
      console.log('connection ready');
    
  }
 */
  
/*   app.get('/', (pet, res) => {
      res.send('Ruta raiz')
  }); */


 app.listen(3000, (pet, res) => {
    console.log('Hola mundo');
 });
 
 /* var http = require('http');
  */

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