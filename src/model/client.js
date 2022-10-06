const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    userID: {
        type: Number,
        require:true,
        trim:true
     },
     messages:{
        type:Array
     },
     agent:{
        type:String
     }
},
{
    timestamps: true 
})




const Client = mongoose.model('client', clientSchema)

module.exports = Client