const fileSchema= require ('./Model/FileSchema');

exports.createFile= async (res,req)=>{
    const{filename,path,parentPath,isDirectory,owner,content}=req.body;
    const {userid}=req.userid
    try{
        if(!filename){
              return res.status(400).json(error("Filename is required"));
        }
        const newFile=new fileSchema({
             filename,
             path,
             parentPath,
             isDirectory,
             owner:userid,
        });
        return status(201).json(newFile);
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