const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
const cors = require('cors');
const routes = require('./routes.js');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use('/', (req,res) => {
    return res.status(404).json({
        success: false,
        data: {},
        err: 'Page Not Found!',
        message: "Page Not Found!"
    })
})



app.listen(5059, ()=>{
    console.log("Mailing service is running on port 5059.");
});

