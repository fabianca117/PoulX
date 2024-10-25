const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inializacion de la aplicacion express
const app = express()
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); //Habilitar CORS para permitir solicitudes desde el front
app.use(express.json()); // Middleware para manejar json en lugar de body-parser
app.use(express.urlencoded({ extended: true })); // Para manejar solicitudes de formularios

// Conexion a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/PoulX')
    .then(() => console.log('Conectado correctamente a MongoDB'))
    .catch(error => {
        console.error('Error al conecar a MongoDB:', error);
        process.exit(1); // Salir si no se puede conectar a la base de datos
    });

// Definir el esquema y modelo de Mongoose para el inventario
const produccionShema = new mongoose.Schema({
    idEntrada: { type: String, required: true },
    fecha: { type: String, required: true },
    lote: { type: String, required: true },
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true },
    responsable: { type: String, required: true }
}, { timestamps: true }); //Anadir timestampspara createdAT y updateAt

const Produccion = mongoose.model('Produccion', produccionShema, 'produccion');

// Rutas
// Ruta GET para obtener todos los productos del inventario
app.get('api/produccion', async (req, res) => {
    try {
        const registros = await produccion.find() //Buscar todos los productos
        res.status(200).json(registros); // Responder con los productos
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
});

// Ruta POST para agregar un nuevo producto al inventario
app.post('api/produccion', async (req, res) => {
    try {
        const nuevoRegistro = new Produccion({
            idEntrada: req.body.idEntrada,
            fecha: req.body.fecha,
            lote: req.body.lote,
            producto: req.body.producto,
            cantidad: req.body.cantidad,
            responsable: req.body.responsable,
        });
        const registroGuardado = await nuevoRegistro.save() //Guardar en MongoDB
        res.status(201).json(registroGuardado); // Responder con el registro guardado
    } catch (error) {
        res.status(400).json({ error: 'Error al guardar el registro' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});