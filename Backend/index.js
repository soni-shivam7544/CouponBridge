const express = require('express');
const mongoose = require('mongoose');
const couponRouter = require('./Routes/coupon.routes.js');
const providerRouter = require('./Routes/provider.routes.js');
const customerRouter = require('./Routes/customer.routes.js');
const uploadRoutes = require('./Routes/upload.routes.js')
const cors = require('cors');
const env = require('dotenv');
const app = express();


env.config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true }));


couponRouter(app);
providerRouter(app);
customerRouter(app);
uploadRoutes(app);


app.get('/', (req, res) => {
    res.send("Welcome Home! :)");
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/couponbridge')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });

// Start the server
app.listen(5050, () => {
    console.log("The server start on port 5050");
});