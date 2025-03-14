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

//obtener un solo cliente
router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const [rows] = await pool.execute(
            'SELECT * FROM cliente WHERE id_clientes =?',
            [id]
        );
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({message: 'Cleinte no encontrado'}); 
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, email, telefono} = req.body;
        const {results} = await pool.execute(
            'UPDATE cliente SET Nombre=?, Email=?, Telefono=? WHERE id_clientes=?',
            [nombre, email, telefono, id]
        );
        if (results.affectedRows > 0) {
            res.json({id, nombre, email, telefono});
        } else {
            res.status(404).json({message: 'Cliente no encontrado'});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {results} = await pool.execute(
            'DELETE FROM cliente WHERE id_clientes=?',
            [id]
        );
        if (results.affectedRows > 0) {
            res.json({message: 'Cliente eliminado'});
        } else {
            res.status(404).json({message: 'Cliente no encontrado'});
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;