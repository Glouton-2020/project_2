// Dependencies 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const methodOverride = require('method-override');

// Middleware 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// app.use(methodOverride('_method'));

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/project_2', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

// Controller Route 
const crmController = require('./controllers/schema.js');
app.use('/CRM', crmController);


// Listen Route 
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});