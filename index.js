const express = require('express');
const app = express();

require('dotenv').config({
    path: '.env'
});

// Database
const db = require('./db');
db(process.env.MONGODB_URI);

// Cors
const cors = require("cors");
app.use(cors());

// Read json -------------------------------- =>
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

// Router
const crud = require('./crud/network');
app.use('/transport', crud);

// Execute server
app.listen(process.env.SERVER_URL || 4000, () => {
    console.log(`Listening in ${process.env.SERVER_URL || 'http://localhost:4000/'}`);
});