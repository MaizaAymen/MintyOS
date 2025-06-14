const mongoose = require('mongoose');
const User= new mongoose.Schema({
    username:{type:String,
        required:true,
        unique:true},
        Password:{
            type:String,
            required:true},
            admin:{
                type:Boolean,
                default:false
            },
            createAt:{
                type:Date,
                default:Date.now
            }

        })

    module.export=mongoose.model('User',User);
