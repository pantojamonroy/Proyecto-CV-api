const express = require('express');
const mongoose = require('mongoose');
const cors= require("cors");
const app = express();
require("dotenv").config();
app.use(cors());

//Conectarnos a Mongoose
mongoose
.connect(process.env.DB_URL)
.then( db => console.log("DB Connected"))
.catch( err => console.log(err))

//Configuraciones
app.use(express.urlencoded({ extended: false }));


//Importar rutas
const productRoutes = require('./routes/product.routes.js')
const salesRoutes = require("./routes/sale.routes");

//Configurar Rutas
app.get("/", function (req, res) { res.send("Hello from vercel"); });
app.use('/products', productRoutes);
app.use("/sales", salesRoutes);

//espacio de rutas


app.get("/", function (request, response) {
    response.send("Hola");
});

app.listen(3000, () => {
    console.log("Server Running");
});