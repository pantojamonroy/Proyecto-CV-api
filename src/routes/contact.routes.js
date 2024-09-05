const   miRouter = require('express').Router();
const   contactsFormController = require('../controllers/contactsForms.controller');

miRouter.post('/guardar', contactsFormController.guardarContacto);
miRouter.get("/listar", contactsFormController.listarContactos);

module.exports = miRouter;