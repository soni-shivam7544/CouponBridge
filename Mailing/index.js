const express = require('express');
const app = express();
const env = require('dotenv');
env.config();




app.listen(5059, ()=>{
    console.log("Mailing service is running on port 5059.");
});

