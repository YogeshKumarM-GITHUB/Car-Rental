const express=require('express');
const {AddCarInDB,GetListOfCars} =require('../Controllers/AddCarController.js')
const upload=require('../Config/MulterConfig.js')
const router=express.Router();

router.post('/addcar',upload.fields([{name:'UserProfile',maxCount:1}]),AddCarInDB);
router.get('/GetCars',GetListOfCars);
module.exports=router;