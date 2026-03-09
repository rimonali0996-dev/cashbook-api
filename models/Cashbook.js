const mongoose = require('mongoose');

const cashbookSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    businessId: { type: String, required: true },
    name: { type: String, required: true },
    balance: { type: Number, default: 0 },
    details: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

// Index for fast businessId-scoped queries
cashbookSchema.index({ businessId: 1 });

module.exports = mongoose.model('Cashbook', cashbookSchema);
