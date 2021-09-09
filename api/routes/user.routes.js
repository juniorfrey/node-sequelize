const {Router} = require('express');
module.exports = function ({UserControllers}){
    const router = Router();

    router.get('/', UserControllers.holaMundo);

    return router;

}