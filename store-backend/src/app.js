const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//routes
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));

//this folder for this application will be used to store public files

app.use('/uploads', express.static(path.resolve('uploads')));

module.exports = app;