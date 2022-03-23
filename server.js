//Imports for our application
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const PORT = 3000;

//Declaring our app which uses express
const app = express();

//Initializing mongodb connection
mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PWD}@main1db.vqmw4.mongodb.net/Main1DB?retryWrites=true&w=majority`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

//Routes import
const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');

//Middlewear
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRouter);
app.use('/product', productRouter);

//What port the app listens on
app.listen(PORT);