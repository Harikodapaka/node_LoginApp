var config = require('../config.json');
var mongoose = require('mongoose');

var options = { useMongoClient:true };
var db = mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useNewUrlParser: true });
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;