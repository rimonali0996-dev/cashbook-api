require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Increased limit for Base64 images
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://rimonali0996_db_user:JcPxIEfDIB0DGvgs@cluster0.5bkaykl.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
    .then(() => console.log('✅ Successfully connected to MongoDB Cluster.'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('Cashbook API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
