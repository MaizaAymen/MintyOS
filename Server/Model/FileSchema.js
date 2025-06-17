const mongoose= require('mongoose');
const fileSchema= new mongoose.Schema({
    filename:{  
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    parentPath:{
        type:"String",
        required:false
    },
    isDirectory:{
        type:Boolean,
        default:false
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    owner:{
        type:String,
        required:false
    },
    content:{
        type:String,
        default:"",
    },
    createAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    }
    
})
//create mongoose model named File based on my fileSchema
//register this model with mongoose so it can be used throuput my app 
module.exports=mongoose.model('File',fileSchema);