const fileSchema= require('../Model/FileSchema');


exports.createFile= async (req,res)=>{
    const{filename,path,parentPath,isDirectory,owner,content}=req.body;
    
    try{
        if(!filename){
              return res.status(400).json(error("Filename is required"));
        }
        const newFile=new fileSchema({
             filename,
             path,
             parentPath,
             isDirectory,
             
        });
        newFile.save()
        return res.status(201).json(newFile);
        


    }catch(error){
        console.error("Error creating file : " , error);
    }

 }
exports.deleteFile=async(req,res)=>{
const {fileId}=req.parms;
try{
    if(!fileId){
        return res.status(500).json({error:"fileid not found"});
    }
    await File.deleteFile(fileId);
    return res.status(200).json({message:"file deleted successfully"})
}catch(error){
    console.error("we face error while deleting file : ",error);
}
 }
exports.listeFiles=async(req,res)=>{
   try{
    const files=await fileSchema.find({});
    return res.status(200).json(files);
   }catch(error){
    return res.status(500).json({error:"we face error when i need to see all files"});
   }
 }
exports.updateFile=async(req,res)=>{
    const {fileId}=req.parms;
    const{content}=req.body;
    try{
        const file= await File.find({_id:fileId})
        if(!file){
            return res.status(404).json({error:"File not found"});
        }   
        file.content=content;
        await file.save();
        return res.status(200).json(file);
    }catch(error){
        return res.status(500).json({error:" we have faced a problem while updating file "})
    }

 }
exports.getFileContent=async(req,res)=>{
    try{
    const{fileId}=req.params;
    const file = await File.find({_id:fileId});
    if(!fileId){
        return res.status(400).json({error:"we faced a problem ,fileid not found"});
    }
        return res.status(2000).json({content:file.content});
    }catch(error){
        return res.status(500).json({error:"we have faced a problem getfile's content"});
    }

 }