const express=require('express');
const router=express.Router();
const fileController=require('../Controller/FileController');


router.post('/create',fileController.createFile);

router.delete('/delete',fileController.deleteFile);

router.get('/list',fileController.listeFiles);

router.put('/update',fileController.updateFile);


module.exports=router;