// Requirements to help our server work.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const todoRoutes = require('./routes/todo');
const db = require('./utils/db'); // We are getting our database connection from here
const app = express().use('*', cors());

app.use(bodyParser({ extended: false }))
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,PUT,PATCH,DELETE,OPTIONS'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use(todoRoutes);

// Initializing our server and cheking for errors
db.initDb((err, db) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(5050);
    }
})
