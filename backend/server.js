require("dotenv").config();

const express = require('express');

const cors = require('cors');

const connectDB = require('./config/db');

const productRoutes =require('./routes/productRoutes')

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 4000;

try {
    app.listen(PORT, () => console.log(`Server running on Port:${PORT}`));
  } catch (e) {
    console.error(e);
  }
  