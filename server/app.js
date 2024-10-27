const express = require('express');
const connectDB = require('./config/db'); // Ensure your DB connection is established if required
const app = express();

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define a test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

