// Set Up Express 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Client = require('./models/clients.js');
const methodOverride = require('method-override');

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:  false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Mongoose Setup 
mongoose.connect('mongodb://localhost:27017/project-2', {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB');
});

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
app.get('/crm', (req, res) => {
    // Use Schema model to get all Clients
    Client.find({}, (err, allClients) => {
        res.render('Index', {
            clients: allClients
        })
    });
});

// New
app.get('/crm/new', (req, res) => {
    res.render('New');
});

// Show
app.get('/crm/:id', (req, res) => {
    // Find the specific document
    Client.findById(req.params.id, (err, foundClient) => {
        // render the Show route and pass it the foundClient
        res.render('Show', {
            client: foundClient
        });
    });
});

// Edit 
app.get('/crm/:id/edit', (req, res) => {
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
app.post('/crm', (req, res) => { 
    req.body.contactClient === "on" ? req.body.contactClient = true : req.body.contactClient = false;
    // Use Model to create Client Document
    Client.create(req.body, (error, createdClient) => {
        res.redirect('/crm');
    });
});


// Seed Route
// app.get('/seed', (req, res) => {
//     Client.create([
//         {
//             companyName: 'Tom Ford',
//             industry: 'Luxury Fashion',
//             description: 'Luxury fashion house with some top quality scents',
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
//         }
//     ], (err, client) => {
//         res.redirect('/crm');
//     })
// });

// Delete
app.delete('/crm/:id', (req, res) => {
    // Delete document from collection
    Client.findByIdAndRemove(req.params.id, (err, deletedClient) => {
        res.redirect('/crm');
    });
});

// Update
app.put('/crm/:id', (req, res) => {
    req.body.contactClient = req.body.contactClient === "on" ? true : false;
    Client.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateClient) => {
        res.redirect('/crm');
    });
});

// Listen Route 
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});