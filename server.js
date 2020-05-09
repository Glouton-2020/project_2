// Set Up Express 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
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

// Controller Route 
const crmController = require('./controllers/controllers.js');
app.use('/crm', crmController);


// Seed Route
// app.get('/seed', (req, res) => {
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
//             description: 'Partially inspired by co-creator Mike Judges experiences as a Silicon Valley engineer in the 1980s, this comedy series follows the misadventures of introverted computer programmer Richard and his brainy friends as they attempt to strike it rich in a high-tech gold rush. ',
//             name: 'Mike Judge',
//             email: 'sonofanton@piedpiper.com',
//             contactClient: true,
//         }
//     ], (err, client) => {
//         res.redirect('/crm');
//     })
// });


// Listen Route 
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});