const express = require('express')
const router = express.Router()
const Person = require('../models/People')




//endpoint to send the data to the MongoDB
router.post('/', async (req, res) => {

    try {
        const data = req.body //assuming the request body contains the person data

        //Create a new Person document using the mongoose model
        const newPerson = new Person(data);

        //Save the data to DB
        const response = await newPerson.save();
        console.log("Person data saved Successfully !");
        res.status(200).json(response);
    } catch (err) {
        console.log('Error in saving the data' + err);
        res.status(500).json({ error: 'Internal server error' })
    }
})

//endpoint to fetch the data from the MongoDB
router.get('/', async (req, res) => {

    try {
        const data = await Person.find();
        res.status(200).json(data)
        console.log('Data Fetched !');
    } catch (err) {
        console.log('Error in fetching the data' + err);
        res.status(500).json({ error: 'Internal server error' })
    }


})


//endpoint to fetch the data based on work type from the MongoDB
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; //Extract the work type form the URL parameter
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            res.status(200).json(response)
            console.log('Data Fetched by work type!');


        } else {
            res.status(400).json({ error: 'Invalid work type' })
        }

    } catch (err) {
        console.log('Error in fetching the data from person work type' + err);
        res.status(500).json({ error: 'Invalid request !' })


    }
})


//update the person table 
router.put('/:id', async (req, res) => {

    try{
        const personId = req.params.id; //Extract the person id from URL
        const updatedPersonData = req.body; //Extract the updated person data from POSTMAN

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, { 
            new: true, //Return the updated person data
            runValidators: true, //Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log('data updated !');
        res.status(200).json(response);

    }catch(err){
        console.log('Error in updating the data' + err);
        res.status(500).json({ error: 'Internal server error' })
    }

})



router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id; //Extract the person id from URL
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }

        console.log('person deleted successfully !');
        res.status(200).json({meassage : 'person deleted successfully'});


    }catch(err){
        console.log('Error in deleting the data' + err);
        res.status(500).json({ error: 'Internal server error' })

    }

})


module.exports = router;



