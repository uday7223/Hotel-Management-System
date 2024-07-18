

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hurray your local server started !')
// })

// app.get('/chicken', function (req, res) {
//   res.send('Sure i would like to serve chicken !')
// }) 


// app.get('/butter-chicken', function (req, res) {
//   res.send('Sure i would like to serve butter chicken !')
// }) 


// app.listen(3000)
// console.log(`local server started at: http://localhost:3000`); 


//===========================================================


// const json = {
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "skills": ["JavaScript", "HTML", "CSS"],
//     "address": {
//       "street": "123 Main St", "city": "Anytown", "postalCode": "12345"
//     }
//   }
  
//   console.log(json);
  
//   console.log(json.name+json.age);
//===========================================================
//core modules of node js 
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();

// fs.appendFile('message1.txt', "Hello "+user.username+"\n", (err) => {
//     if (err) throw err;
//     console.log('Done file created ');
//   });


// function fun(a,b){
//     return "the sum is : "+(a+b)
// }

// let fun = function(a,b){
//     return "the sum is : "+(a+b)
// }

// fun= (a,b)=>{
//     return "the sum is : "+(a+b)
// }

// let funny =()=>{
//     console.log("inside fun()");
// }

// funny()

//===========================================================

//callback function() as a Arrow function in a main function
// let fun = function(a,b,cb){
// const res = a+b;
// console.log("I am in main fun function");
// cb(res);
// }
// fun(4,5,(res)=>console.log(`the sum is : ${res}`))


