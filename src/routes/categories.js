// Init
const express = require('express');
const router = express.Router();
const pool = require('../database.js');

// Routes
router.get('/', async (req, res) => {
    const categories = await pool.query('SELECT * FROM category;');
    res.send({categories});
});

router.get('/:id', async (req, res) => {
    const category = await pool.query('SELECT * FROM category WHERE category_id = ?', [req.params.id]);
    res.send({category});
});

router.get('/inProduct/:id', async (req, res) => {
    const inProduct = await pool.query('SELECT category_id FROM product_category WHERE product_id = ?;', [req.params.id]);
    res.send({inProduct});
});

router.get('/inDepartment/:id', async (req, res) => {
    const inDepartment = await pool.query('SELECT category_id FROM category WHERE department_id = ?;', [req.params.id]);
    res.send([inDepartment]);
});

// Export
module.exports = router;