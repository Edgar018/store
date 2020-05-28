const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(multer({
    dest: path.join(__dirname, 'public/images')
}).single());



//routes
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));

module.exports = app;