const mongoose = require('mongoose');
require('dotenv').config();



//Define teh MongoDB Connection URL
const mongoURL = process.env.DB_URL_LOCAL;
// const mongoURL = 'mongodb+srv://udaydevnur223:Uday1234@cluster0.qohmwf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// const mongoURL = process.env.DB_URL_ATLAS || process.env.DB_URL_LOCAL;

// const mongoURL = process.env.DB_URL_ATLAS;

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