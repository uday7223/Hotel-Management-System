const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price:{
        type : Number,
        required:true
    },
    taste:{
        type : String,
        enum:['Sweet','Spicy','Mixed'],
        required:true,
    },
    is_drink:{
        type : Boolean,
        default:false
    },
    ingredients:{
        type : [String],
        default:[],
    },
    num_sales:{
        type : Number,
        default:0
    }

})

const Menu = mongoose.model('MenuItem', menuItemSchema, 'Menu')


//comment added for testing
module.exports = Menu; 