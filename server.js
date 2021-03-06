const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciado o DB
mongoose.connect(
  'mongodb://10.168.230.80:27017/social', 
  { useUnifiedTopology: true, useNewUrlParser: true }
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3000);