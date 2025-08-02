const mongoose=require('mongoose');

const AddCarSchema=new mongoose.Schema({
   UserProfile:{type:String,required:true},
   Brand:{type:String,required:true},
   Model:{type:String,required:true},
   Year:{type:Number,required:true},
   DailyPrice:{type:Number,required:true},
   Category:{type:String,required:true},
   Transmission:{type:String,required:true},
   FuelType:{type:String,required:true},
   SeatingCapacity:{type:String,required:true},
   Location:{type:String,required:true},
   Descrption:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model('AddCar',AddCarSchema);