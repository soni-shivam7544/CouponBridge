const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
const cors = require('cors');
const routes = require('./routes.js');


app.use(cors());


routes(app);




app.listen(5059, ()=>{
    console.log("Mailing service is running on port 5059.");
});

