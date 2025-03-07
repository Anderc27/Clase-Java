//  CARGAR LAS VARIABLES DE ENTORNO DESDE .ENV
require('dotenv').config();

//IMPORTAR LAS DEPENDENCIAS
//framework para manejar el servidor
const express = require('express');

//middeware para habilitar peticiones de otro dominio
const cors = require('cors');

//Procesar datos JSON
const bodyParser = require('body-parser');

//Crea la aplicacion 
const app = express();

//si PORT no tiene valor usa el 3000
const port = process.env.PORT || 3000;

//Habilita CORS
app.use(cors());

//Habilita bodyParser para leer ls datos JSON
app.use(bodyParser.json());

//RUTAS DE PRUEBA
app.get('/', (req, res) => {
    res.send('API RESTfull con Express')
});

//RUTA DE PRUEBA
app.get('/', (req, res) => {
    res.send('API de CRM funcionando');
});

//Ruta del cleinte
const clienteRout = require('./routes/cliente');
app.use('/cliente', clienteRout);

//Iniciar el servidor
app.listen(port, () => {
    console.log(`API CRM corriendo en http://localhost:${port}`);
});
