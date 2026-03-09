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

module.exports = mongoose.model('Transaction', transactionSchema);
