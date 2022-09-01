const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Importing Routes
const postsRoute = require('./routes/logins');

app.use('/logins', postsRoute);
const postsRoute1 = require('./routes/pastebins');

app.use('/pastebins', postsRoute1);
//Routes
app.get('/',(req,res)=>{
    res.send('Hello');
});

//Connecting with DB
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true}, () => 
    console.log('Connected to DB')
);

//This will be listening the Server
app.listen(3000);
