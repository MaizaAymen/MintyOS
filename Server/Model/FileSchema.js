const mongoose= require(('mongoose'));
const fileSchema= new mongoose.fileSchema({
    filename:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    parentPath:{
        type:mongoose.Schema.types.objectId,
        ref:"File"
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
        type:mongoose.Schema.types.objectId,
        ref:"User"
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
module.exports=mongoose('File',fileSchema);