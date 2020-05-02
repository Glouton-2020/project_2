const express = require('express');
const router = express.Router();
const Client = require('../models/schema.js'); 

// Routes

// Index 
router.get('/', (req, res) => {
    // Use Schema model to get all Clients
    Client.find({}, (error, allClients) => {
        res.render('Index', {
            clients: allClients
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('New');
});


module.exports = router;