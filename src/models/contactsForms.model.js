const mongoose = require("mongoose");
const contactSchema = mongoose.Schema;

const ContactForm = new contactSchema({
  name: String,
  lastname: String,
  phone: Number,
  email: String,
  city: String,
  message: String,
});

module.exports = mongoose.model("contactsform", ContactForm);
