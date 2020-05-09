const express = require('express');
const router = express.Router();
const Client = require('../models/clients.js'); 

/**************************************************************************
 * PRESENTATIONAL ROUTES (all GET requests)
 * 
 * Index: Shows all resources - links to New, Edit and Delete routes
 * New: Shows form to create new resource item - linked to Create Route
 * Show: Shows 1 individual resource from list
 * Edit: Shows a form to update a resource item - linked to Update Route
 * 
 * **********************************************************************/

// Index 
router.get('/', (req, res) => {
    // Use Schema model to get all Clients
    Client.find({}, (err, allClients) => {
        res.render('Index', {
            clients: allClients
        })
    });
});

// New
router.get('/new', (req, res) => {
    res.render('New');
});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Client.findById(req.params.id, (err, foundClient) => {
        // render the Show route and pass it the foundClient
        res.render('Show', {
            client: foundClient
        });
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

/**************************************************************************
 * FUNCTIONAL ROUTES
 * 
 * Create: Creates a new resource (POST)
 * Delete: Deletes a resource (DELETE)
 * Update: Updates a resource (PUT)
 * 
 * *************************************************************************/

// Create Route
router.post('/', (req, res) => { 
    req.body.contactClient === "on" ? req.body.contactClient = true : req.body.contactClient = false;
    // Use Model to create Client Document
    Client.create(req.body, (error, createdClient) => {
        res.redirect('/crm');
    });
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Client.findByIdAndRemove(req.params.id, (err, deletedClient) => {
        res.redirect('/crm');
    });
});

// Update
router.put('/:id', (req, res) => {
    req.body.contactClient = req.body.contactClient === "on" ? true : false;
    Client.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateClient) => {
        res.redirect('/crm');
    });
});

module.exports = router;