const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email: {
       type: String,
       require: true,
       unique: true
    },
    password: {
        type:String,
        require:true
    },
    visitHistory: [{ timestamps: {type: Number}}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
}, 
{ timestamps: true });

const User = mongoose.model('user', userSchema)

module.exports = User;