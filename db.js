const mongoose = require('mongoose');
require('dotenv').config();


//Define teh MongoDB Connection URL
const mongoURL = process.env.DB_URL_LOCAL;
// const mongoURL = process.env.DB_URL;


//Connect to the MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//Get the default connections
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//define event listners for DB connection
db.on('connected',()=>{
    console.log('Connected to MongoDB')
});

db.on('error',()=>{
    console.log('Error in connecting to MongoDB')
})

db.on('disconnected',()=>{
    console.log('Disconnected from mongoDB');
})

//export the database connection object
module.exports = db;