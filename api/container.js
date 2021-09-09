const {asClass, createContainer, asFunction, asValue } = require('awilix');
const Server = require('./server');
const Startup = require('./startup');

const container = createContainer();

container.register({
    app: asClass(Startup).singleton(),
    server : asClass(Server).singleton()
});

module.exports = container;