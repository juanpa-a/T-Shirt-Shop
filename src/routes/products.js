// Init
const express = require('express');
const router = express.Router();
const pool = require('../database.js');

// Routes
router.get('/', async (req, res) => {
    const products = await pool.query('SELECT * FROM product;');
    res.send({products});
});

// SEARCH

router.get('/:id', async (req, res) => {
    const product = await pool.query('SELECT * FROM product WHERE product_id=?', [req.params.id]);
    res.send({product});
});

router.get('/inCategory/:id', async (req, res) => {
    const in_category = await pool.query('SELECT * FROM product_category WHERE category_id=?;', [req.params.id]);
    res.send({in_category});
});

router.get('/inDepartment/:id', async (req, res) => {
    const in_department = await pool.query('SELECT product.name FROM product JOIN product_category JOIN category WHERE product.product_id = product_category.product_id AND product_category.category_id=category.category_id AND category.department_id = ?;', [req.params.id]);
    res.send({in_department});
});

// DETAILS

// LOCATIONS

// REVIEWS
    // post



// Export
module.exports = router;