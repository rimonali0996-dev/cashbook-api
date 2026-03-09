const mongoose = require('mongoose');

const dueMessageSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    businessId: { type: String, required: true },
    clientName: { type: String, required: true },
    dueAmount: { type: Number, required: true },
    phone: { type: String, default: '' },
    lastMessageSentAt: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DueMessage', dueMessageSchema);
