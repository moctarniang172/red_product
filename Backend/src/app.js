const express = require('express');
const connectdb = require('./config/confi');
const cors = require('cors');


const connexion = connectdb();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', require('./routes'))




module.exports = app;
