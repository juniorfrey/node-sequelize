const { config } = require('dotenv');
const express = require('express');
const { resolve } = require('./container');
class Server {
    constructor({config, router}){
        this._config = config;
        this._express = express();
        this._express.use(router);
    }

    start(){
        return new Promise((resolve, reject => {
            const http = this._express.listen(config.PORT, () => {
                const { port } = http.address();
                console.log('Aplicación corriendo en el puerto ' + port);
                resolve();
            })
        }))
    }

}

module.exports = Server;