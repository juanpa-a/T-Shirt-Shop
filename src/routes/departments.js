// Init
const express = require('express');
const router = express.Router();
const pool = require('../database.js');

// Routes
router.get('/', async (req, res) => {
    const departments = await pool.query('SELECT * FROM department;');
    res.send({departments});
});

router.get('/:id', async (req, res) => {
    const department = await pool.query('SELECT * FROM department WHERE department_id = ?', [req.params.id]);
    res.send({department});
});

// Export
module.exports = router;