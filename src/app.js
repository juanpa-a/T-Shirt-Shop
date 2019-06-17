// Inits
const express = require('express');
const morgan = require('morgan');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

// Settings
const port = process.env.PORT || 4000;
app.set(port);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: 'hbs',
    helpers: require('./lib/handlebars.js')
}));
app.set('view engine', '.hbs');

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



