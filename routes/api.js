const express = require('express');
const router = express.Router();

const Business = require('../models/Business');
const Cashbook = require('../models/Cashbook');
const Transaction = require('../models/Transaction');
const Inventory = require('../models/Inventory');
const DueMessage = require('../models/DueMessage');
const StockTransaction = require('../models/StockTransaction');

// --- BUSINESSES ---
router.post('/businesses', async (req, res) => {
    try {
        const biz = new Business(req.body);
        await biz.save();
        res.status(201).json(biz);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/businesses/:id', async (req, res) => {
    try {
        const biz = await Business.findOne({ id: req.params.id });
        if (!biz) return res.status(404).json({ error: 'Not found' });
        res.json(biz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/businesses/:id', async (req, res) => {
    try {
        const biz = await Business.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(biz);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// --- CASHBOOKS ---
router.get('/cashbooks/:businessId', async (req, res) => {
    try {
        const docs = await Cashbook.find({ businessId: req.params.businessId });
        res.json(docs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/cashbooks', async (req, res) => {
    try {
        const doc = new Cashbook(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/cashbooks/:id', async (req, res) => {
    try {
        const doc = await Cashbook.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/cashbooks/:id', async (req, res) => {
    try {
        await Cashbook.findOneAndDelete({ id: req.params.id });
        // Also delete associated transactions
        await Transaction.deleteMany({ cashbookId: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- TRANSACTIONS ---
router.get('/transactions/:businessId', async (req, res) => {
    try {
        const docs = await Transaction.find({ businessId: req.params.businessId }).sort({ createdAt: -1 });
        res.json(docs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/transactions', async (req, res) => {
    try {
        const doc = new Transaction(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/transactions/:id', async (req, res) => {
    try {
        await Transaction.findOneAndDelete({ id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- INVENTORY ---
router.get('/inventory/:businessId', async (req, res) => {
    try {
        const docs = await Inventory.find({ businessId: req.params.businessId });
        res.json(docs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/inventory', async (req, res) => {
    try {
        const doc = new Inventory(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/inventory/:id', async (req, res) => {
    try {
        const doc = await Inventory.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/inventory/:id', async (req, res) => {
    try {
        await Inventory.findOneAndDelete({ id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- DUE MESSAGES ---
router.get('/due-messages/:businessId', async (req, res) => {
    try {
        const docs = await DueMessage.find({ businessId: req.params.businessId }).sort({ createdAt: -1 });
        res.json(docs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/due-messages', async (req, res) => {
    try {
        const doc = new DueMessage(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/due-messages/:id', async (req, res) => {
    try {
        const doc = await DueMessage.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/due-messages/:id', async (req, res) => {
    try {
        await DueMessage.findOneAndDelete({ id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// --- STOCK TRANSACTIONS ---
router.get('/stock-transactions/:businessId', async (req, res) => {
    try {
        const docs = await StockTransaction.find({ businessId: req.params.businessId }).sort({ createdAt: -1 });
        res.json(docs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/stock-transactions', async (req, res) => {
    try {
        const doc = new StockTransaction(req.body);
        await doc.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/stock-transactions/:id', async (req, res) => {
    try {
        const doc = await StockTransaction.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        res.json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/stock-transactions/:id', async (req, res) => {
    try {
        await StockTransaction.findOneAndDelete({ id: req.params.id });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
