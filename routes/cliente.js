const express = require('express');
const router = express.Router();
const pool = require('../db');

//Crear uncliente
router.post('/', async (req, res) => {
    try {
        const {nombre, email, telefono} =req.body;
        const {results} = await pool.execute(
            'INSERT INTO cliente (Nombre, Email, Telefono) VALUES (?,?,?)',
            [nombre, email,telefono]
        );
        res.status(20).json({id: results.insertid, nombre,email, telefono});
    }
    catch (err) {
        res.status(500).send(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM cliente');
        res.json(rows);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;