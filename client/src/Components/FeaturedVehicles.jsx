import { useSelector,useDispatch } from 'react-redux'
import { useGetCarQuery } from "../features/Cars/carsSlice.js";
import {  useEffect } from 'react'
import CarData from './CarData.jsx'


const FeaturedVehicles = () => {

    const {data:cars}=useGetCarQuery()
    //const dispatch=useDispatch();

   console.log(cars,"carData")

    return (
        <div className="bg-white">
            <div>
                <div className="text-center">
                    <h1 className="font-bold text-[40px]">Featured Vehicles</h1>
                    <p className="text-gray-600">Explore our selection of premium vehicles available for your next adventure.</p>
                </div>
                <CarData cars={cars}/>
            </div>
        </div>
    )
}
export default FeaturedVehicles;