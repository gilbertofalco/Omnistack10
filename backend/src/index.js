const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://gilberto:2777@cluster0.bjixu.mongodb.net/week10?retryWrites=true&w=majority');

app.use(express.json());

app.use(routes);

app.listen(3333);
