const mongoose = require('mongoose');

const stockTransactionSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    businessId: { type: String, required: true },
    cashbookId: { type: String, required: true },
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    type: { type: String, enum: ['IN', 'OUT'], required: true },
    count: { type: Number, required: true },
    price: { type: Number, required: true },
    companyName: { type: String, default: '-' },
    paymentStatus: { type: String, enum: ['Paid', 'Unpaid'], default: 'Paid' },
    date: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Indexes for fast businessId-scoped queries
stockTransactionSchema.index({ businessId: 1, createdAt: -1 });
stockTransactionSchema.index({ productId: 1, createdAt: -1 });

module.exports = mongoose.model('StockTransaction', stockTransactionSchema);
