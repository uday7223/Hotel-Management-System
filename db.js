const mongoose = require('mongoose');

//Define teh MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//Connect to the MongoDB
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
//Get the default connection
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