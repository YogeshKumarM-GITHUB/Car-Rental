import { useState } from "react";
import { cityList,assets } from "../assets/assets";
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
    const [selectedCity, setSelectedCity] = useState("Please select location");
    return (
        <div className="mt-0 md:mt-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[40px] font-bold">Luxury cars on Rent</h1>
                <div className="bg-white shadow-md px-20 md:rounded-full flex flex-col md:flex-row items-center justify-around mt-10 py-4">
                    <form className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex flex-col items-start">
                            <select className="outline-none" onChange={(e) => setSelectedCity(e.target.value)} >
                                <option value="">Pickup Location</option>
                                {cityList.map((city, index) => {
                                    return (
                                        <option className="px-8 border border-gray-400" key={index} value={city}>{city}</option>
                                    )
                                })
                                }
                            </select>
                            <label className="text-gray-500 ml-1 mt-1">{!selectedCity?"Please Select location":selectedCity}</label>
                        </div>
                        <div className="flex flex-col">
                            <label>Pick-up Date</label>
                            <input type="date" name="pickupdate" className="text-gray-500 outline-none mt-1" />
                        </div>
                        <div className="flex flex-col">
                            <label>Return Date</label>
                            <input type="date" name="pickupdate" className="text-gray-500 outline-none mt-1" />
                        </div>
                        <div className="float-right flex flex-row items-center bg-[#2563eb] rounded-md cursor-pointer  transition-all duration-300 ease-in-out hover:bg-purple-500 px-7 py-2">
                            <CiSearch className="text-white text-[20px]"/>
                            <button className='text-white'>Search</button>
                        </div>
                    </form>
                </div>
                <div className="mt-3">
                    <img src={assets.main_car} alt="Main Car Image" className="object-cover w-[863px]" />
                </div>
            </div>
        </div>
    )
}
export default HeroSection;