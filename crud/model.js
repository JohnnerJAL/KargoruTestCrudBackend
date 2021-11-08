const mongoose = require('mongoose');

const Document = mongoose.Schema;

const collection = new Document({
    placa: String,
    conductor: String,
    origen: String,
    destino: String,
    date: Date,
    edited: Date
});

const model = mongoose.model('Viaje', collection);

module.exports = model;