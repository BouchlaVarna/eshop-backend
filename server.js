//Imports for our application
require('dotenv').config();
const express = require('express');
const path = require('path');
const Sequelize = require('sequelize')
const PORT = 3000;

//Declaring our app which uses express
const app = express();

//Routes import
const indexRouter = require('./routes/index');

//Middlewear
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRouter);

//What port the app listens on
app.listen(PORT);