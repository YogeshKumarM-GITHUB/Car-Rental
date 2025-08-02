const express=require('express');
const {AddCarInDB} =require('../Controllers/AddCarController.js')
const upload=require('../Config/MulterConfig.js')
const router=express.Router();

router.post('/addcar',upload.fields([{name:'UserProfile',maxCount:1}]),AddCarInDB);

module.exports=router;