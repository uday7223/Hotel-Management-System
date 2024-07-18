const mongoose = require('mongoose')

//define the Person Schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true,
    },
    mobile:{
        type:String, 
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    }, 
    address:{
        type:String,
        require:true,
    },
    salary:{
        type:Number,
        require:true,
    }
})


//create Person model
const Person = mongoose.model('Person', personSchema)

module.exports = Person;