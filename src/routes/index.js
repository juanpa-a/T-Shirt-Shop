// Init
const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.send('Hello Friend.');
});

// Export
module.exports = router;