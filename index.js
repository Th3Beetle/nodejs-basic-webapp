const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(require('body-parser').json());
require('./api/index')(app);
MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
    if (err) return console.log(err)
app.listen(3333, () => {
    console.log('server started!');
    });
})
