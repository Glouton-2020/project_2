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

// Create Route
router.post('/', (req, res) => { 
    req.body.contactClient === "on" ? req.body.contactClient = true : req.body.contactClient = false;
    // Use Model to create Client Document
    Client.create(req.body, (error, createdClient) => {
        res.redirect('/crm');
    });
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Client.findById(req.params.id, (error, foundClient) => {
        // render the Show route and pass it the foundFruit
        res.render('Show', {
            client: foundClient
        });
    });
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Client.findByIdAndRemove(req.params.id, (err, client) => {
        res.redirect('/crm');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Client.findById(req.params.id, (err, foundClient) => {
        // render the edit view and pass it the found fruit
        res.render('Edit', {
            client: foundClient
        })
    });
});

// Put
router.put(':id', (req, res) => {
    req.body.contactClient = req.body.contactClient === "on" ? true : false;

    // Update the fruit document using our model
    Client.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/crm');
    });
});



module.exports = router;