const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must be required'],
        unique: [true, 'name must be unique'],
        trim: true,
        lowercase: true,
     },
     replyto:{
        type:String,
        required:true
     }
},
{
    timestamps: true 
})




const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin