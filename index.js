const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const profileRouter = require('./routes/profile');

const connectionURL = `mongodb+srv://crazy_stardusts:${process.env.MongoPass}@clusname.ywg00.mongodb.net/restAPI?retryWrites=true&w=majority`


mongoose.connect(connectionURL);

const app = express();
app.use(express.json())
app.use('/api', profileRouter);

app.listen(5000, () => {
    console.log("Server started");
})










