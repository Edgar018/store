const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));

module.exports = app;