require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const AddCarRoute = require('./Routes/AddCarRoute.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const DBURL = process.env.MONGODBURL;
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(DBURL, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 20000,
    });
    console.log('MongoDB connected');

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to connect MongoDB:', err.message);
    process.exit(1);
  }
};

startServer();
app.get('/', (req, res) => {
  res.send("server started")
})
app.use('/api', AddCarRoute);
module.exports = app;
