const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    businessId: { type: String, required: true },
    cashbookId: { type: String, required: true },
    type: { type: String, enum: ['in', 'out'], required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    category: { type: String, default: '' },
    paymentMode: { type: String, default: '' },
    remarks: { type: String, default: '' },
    selectedProductId: { type: String, default: '' },
    inventoryQuantity: { type: Number, default: 0 },
    imageURL: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

// Indexes for fast businessId-scoped queries
transactionSchema.index({ businessId: 1, createdAt: -1 });
transactionSchema.index({ cashbookId: 1, createdAt: -1 });

module.exports = mongoose.model('Transaction', transactionSchema);
