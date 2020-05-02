const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const clientSchema = new Schema({
    companyName: { type: String, required: true },
    industry: { type: String, required: true },
    clientName: { type: String, required: true },
    description: { type: String, required: true },
    contactClient: { type: Boolean },
    futureSales: { type: String, required: true },
    notes: { type: String },
});

//  Create Model from our Schema
const Client = mongoose.model('Client', clientSchema);

// Export Fruit Model
module.exports = Client;
