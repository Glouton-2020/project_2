const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const clientSchema = new Schema({

    email: String,
    companyName: { type: String, required: true },
    name: String,
    industry: { type: String, required: true },
    description: { type: String, required: true },
    contactClient: { type: Boolean },
});

//  Create Model from our Schema
const Client = mongoose.model('Client', clientSchema);

// Export Fruit Model
module.exports = Client;