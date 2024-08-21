const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Product = new Schema({
    ref: String,
    precio: Number,
    description: String,
    isAvailable: Boolean
})

module.exports = mongoose.model('products', Product);
