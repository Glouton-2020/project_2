//Dependencies
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

// Seed Route
// router.get('/seed', (req, res) => {
//     Client.create([
//         {
//             companyName: 'Tom Ford',
//             industry: 'Luxury Fashion',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//             name: 'Donald King',
//             email: 'dking@tomford.com',
//             contactClient: true,
//         },
//         {
//             companyName: 'The Real Real',
//             industry: 'Retail',
//             description: 'The RealReal is the leader in authenticated luxury consignment. All items are authenticated through a rigorous process overseen by experts.',
//             name: 'Elliot Seed',
//             email: 'ellise@trr.com',
//             contactClient: false,
//         },
//         {
//             companyName: 'Apple',
//             industry: 'Technology',
//             description: 'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment.',
//             name: 'Tim Apple',
//             email: 'tapple@apple.com',
//             contactClient: true,
//         },
//         {
//             companyName: 'Molten Investments',
//             industry: 'Investment Banking',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//             name: 'Surely Pudding',
//             email: 'sweetmaggy@burnyourinvestments.com',
//             contactClient: false,
//         },
//         {
//             companyName: 'Snow White Cleaning',
//             industry: 'Waste Removal',
//             description: 'Tony Soprano juggles the problems of his fractious family with those of a "Family" of a different sort - the mob. He sees a therapist to deal with his professional and personal problems, which bring on panic attacks.',
//             name: 'Tony Soprano',
//             email: 'soprano@madeinamerica.com',
//             contactClient: true,
//         },
//         {
//             companyName: 'Pied Piper',
//             industry: 'Technology',
//             description: 'Partially inspired by co-creator Mike Judges experiences as a Silicon Valley engineer in the 1980s, this comedy series follows the misadventures of introverted computer programmer Richard and his brainy friends as they attempt to strike it rich in a high-tech gold rush.',
//             name: 'Mike Judge',
//             email: 'sonofanton@piedpiper.com',
//             contactClient: true,
//         }
//     ], (err, data) => {
//         res.redirect('/crm');
//     })
// });

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