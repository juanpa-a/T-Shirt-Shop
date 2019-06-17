// Init
const express = require('express');
const router = express.Router();
const pool = require('../database.js');

// Routes
router.get('/', async (req, res) => {
    const attributes = await pool.query('SELECT * FROM attribute;');
    res.send({attributes});
});

router.get('/:id', async (req, res) => {
    const attribute = await pool.query('SELECT * FROM attribute WHERE attribute_id=?;', [req.params.id]);
    res.send({attribute});
});

router.get('/values/:id', async (req, res) => {
    const values = await pool.query('SELECT * FROM attribute_value WHERE attribute_id=?;', [req.params.id]);
    res.send({values});
});

router.get('/inProduct/:id', async (req, res) => {
    const in_prod = await pool.query('SELECT * FROM product_attribute WHERE product_id=?', [req.params.id]);
    res.send({in_prod});
});

// Export
module.exports = router;