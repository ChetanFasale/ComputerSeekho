const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;

app.get('/', function(req, res) {
  res.send('Hello World1');
})

app.get('/getCourse', (req, res) => {
  const cursor = db.collection('course').find().toArray()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
  
})
app.listen(3000, function() {
  console.log('listening on 3000')
})

/*

Connecting with MongoDB native driver


const url = 'mongodb://127.0.0.1:27017';

const dbName = 'smvita'
let db;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName);
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);
})*/



// Connecting with Mongoose
//To avoid deprecation warning
// npm install mongoose@5.11.15
const url = 'mongodb://127.0.0.1:27017/smvita';
mongoose.connect(url, { useNewUrlParser: true });


const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

