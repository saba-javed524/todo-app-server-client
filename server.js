const { config } = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv/config");
const bodyparser = require("body-parser");

//MIDDLEWARES
//EXECUTES WHEN ROUTES ARE BEING HIT (FUNCTIONS ARE GONNA RUN)
// app.use('/', () => console.log('Middleware running'));
app.use(cors());
app.use(bodyparser.json());

//import route
const todolistRoute = require('./routes/todoList');
app.use('/todolist', todolistRoute);
//2nd route
const checkRoute = require('./routes/checkRoute');
app.use('/checkroute', checkRoute);

//ROUTES
//getting data on this route
app.get('/', (req, res) => {
    res.send('Hello Server!');
});

// app.get('/todolist', (req, res) => {
//     res.send("This is my TODO List");
// });

//CONNECT TO DB
mongoose.connect(process.env.DATABASE_CONNECTION);
mongoose.connection.on('open', () => { console.log("DATABASE CONNECTION WAS SUCCESSFUL"); }); // CHECK IF DB CONNECTION WAS SUCCESSFUL

//start listening to the server
app.listen(3001, () => {
    console.log('Backend Application listening at http://localhost:3001');
});