const express = require('express');
const ConnectDb = require('./config/ConnectDb');
const advertRoute = require('./routes/AdvertRoutes');
const UserRoute = require('./routes/UserRoutes');

require('dotenv').config();
const cors = require('cors');
const app = express();

// Connect to the database
ConnectDb();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
app.use('/advert', advertRoute);
app.use('/user', UserRoute);

// Default error handling
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The application is running on port ${port}`);
});
