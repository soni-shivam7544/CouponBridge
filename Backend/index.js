const express = require('express');
const mongoose = require('mongoose');
const couponRouter = require('./Routes/coupon.routes.js');
const providerRoutes = require('./Routes/provider.routes.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

couponRouter(app);
providerRoutes(app);


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