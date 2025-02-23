// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://Pradeep3009:Chintu9989@expensetrackerdb.gfe9r.mongodb.net/ExpenseTrackerDB")
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

// Import routes
const applicationsRoute = require('./routes/applications');

// Use routes
app.use('/api/applications', applicationsRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
