/* const   ContactFormModel = require('../models/contactForms.model')

const   ContactFormController = {
    guardarContacto: async function (req, res) {

const   ContactFormParaGuardar = new ContactFormModel(req.body);
await ContactFormParaGuardar.save();
res.status(200).json(ContactFormParaGuardar);
},
listarContactos: async function (req, res) {
    //en una sola linea regreso la info de todos los contactos que hay en la DB
    res.status(200).json(await ContactFormModel.find());
}
};

module.exports = ContactFormController

//ESTARA ESTE PENDIENTE?

 */
