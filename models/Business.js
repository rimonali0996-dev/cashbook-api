const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // we use client generated ID
    name: { type: String, required: true },
    pins: {
        admin: { type: String, default: '1234' },
        manager: { type: String, default: '0000' },
        salesman: { type: String, default: '0000' },
        collector: { type: String, default: '0000' }
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Business', businessSchema);
