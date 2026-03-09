const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    businessId: { type: String, required: true },
    name: { type: String, required: true },
    stockCount: { type: Number, default: 0 },
    price: { type: Number, default: 0 }, // optional if using totalExpense
    stockLimit: { type: Number, default: 0 },
    totalExpense: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
    imageURL: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventory', inventorySchema);
