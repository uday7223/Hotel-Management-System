const express = require('express')
const app = express()   
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000;



app.get('/', function (req, res) {
  res.send('WELCOME TO OUR HOTELE !')
})







//Import Person the router files 
const personRoutes = require('./routes/personRoutes')

//Use the Person routers
app.use('/Person', personRoutes);

//Import the Menu router files
const menuRoutes = require('./routes/menuItemRoutes')

//Use the menu routers
app.use('/Menu', menuRoutes)


app.listen(PORT)
console.log(`local server started at: http://localhost:3000`); 

















//using callbacks makes it more inefficient 
  // const data = req.body //assuming the request body contains the person data

  // //Create a new Person document using the mongoose model
  // const newPerson =  new Person(data);

  // //Save the data to DB
  // newPerson.save((error, savedPerson)=>{
  //   if(error){
  //     res.status(500).json({error:'Internal server error'})
  //     console.log('Error in saving the data'+error);
  //   }else {
  //     res.status(200).json(savedPerson);
  //     console.log('Data saved sucessfully !');
  //   }
  // });
