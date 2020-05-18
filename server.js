// Set Up Express 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/crm'



// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:  false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Mongoose Setup 
mongoose.connect(MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB');
});

// Controller Route 
const crmController = require('./controllers/controllers.js');
app.use('/crm', crmController);

// Listen Route 
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});