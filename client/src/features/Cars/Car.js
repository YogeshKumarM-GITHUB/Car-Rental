import { createSlice } from '@reduxjs/toolkit'
import {dummyCarData} from '../../assets/assets.js'

const initialState = {
    cars: [],
    loading: false,
    error: false,
    singleCarDetails:{}
}

export const carsSlice=createSlice({
    name:"cars",
    initialState,
    reducers:{
         getCars:(state)=>{
         // debugger
           state.cars=dummyCarData
         },
         getdetailedCar:(state,action)=>{
           // debugger;
            console.log(state.cars);
            const carDetails=state.cars.find(car=>car._id.toString()==action.payload._id.toString());
            console.log("Car Details",carDetails);
            state.singleCarDetails=carDetails ? carDetails : {};
         }
    }
})

export const {getCars,getdetailedCar}=carsSlice.actions;
export default carsSlice.reducer;