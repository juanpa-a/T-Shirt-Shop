// Inits
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

// Settings
const port = process.env.PORT || 4000;
app.set(port);
// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global Variables
app.use((req, res, next) => {
    next();
});

// Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/auth.js'));
app.use('/departments', require('./routes/departments.js'));
app.use('/categories', require('./routes/categories.js'));
app.use('/attributes', require('./routes/attributes.js'));
app.use('/products', require('./routes/products.js'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});



