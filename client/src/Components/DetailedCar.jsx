// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getdetailedCar, getCars } from "../features/Cars/Car";
// import { useParams } from "react-router-dom";
// import { dummyCarData, assets } from "../assets/assets";
// import { BiLeftArrowAlt } from "react-icons/bi";
// import { CiCircleCheck } from "react-icons/ci";

// const DetailedCar = () => {
//     const { _id } = useParams();
//     const dispatch = useDispatch();
//     const { singleCarDetails, cars } = useSelector((state) => state.car);

//     useEffect(() => {
//         if (cars.length === 0) {
//             dispatch(getCars(dummyCarData));
//         }
//     }, [dispatch, cars.length]);

//     useEffect(() => {
//         if (_id && cars.length > 0) {
//             dispatch(getdetailedCar({ _id }));
//         }
//     }, [_id, cars, dispatch]);

//     return (
//         <div>
//             {singleCarDetails && (
//                 <div className="container mx-auto max-w-screen-xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

//                     {/* Left Section - Car Info */}
//                     <div className="md:col-span-2 flex flex-col">
//                         <button className="w-fit flex items-center gap-2 mb-4">
//                             <BiLeftArrowAlt className="text-[20px] text-gray-600" />
//                             <span className="text-gray-600">Back to all cars</span>
//                         </button>

//                         <div className="w-full">
//                             <img
//                                 src={singleCarDetails.image}
//                                 alt={singleCarDetails.name}
//                                 className="rounded-xl w-full object-cover max-h-[400px] shadow-md"
//                             />
//                         </div>

//                         <div className="mt-4">
//                             <p className="font-bold text-[25px]">{singleCarDetails.brand} {singleCarDetails.model}</p>
//                             <p className="text-gray-600 text-[20px]">{singleCarDetails.category} · {singleCarDetails.year}</p>
//                         </div>

//                         <hr className="border-red-600 border-t-[1px] my-4" />

//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
//                             <div className="bg-gray-100 px-4 py-6 flex flex-col items-center rounded-lg shadow-md">
//                                 <img src={assets.users_icon} className="h-6 mb-2" alt="Seats" />
//                                 <p className="text-sm font-medium">{singleCarDetails.seating_capacity} Seats</p>
//                             </div>
//                             <div className="bg-gray-100 px-4 py-6 flex flex-col items-center rounded-lg shadow-md">
//                                 <img src={assets.fuel_icon} className="h-6 mb-2" alt="Fuel Type" />
//                                 <p className="text-sm font-medium">{singleCarDetails.fuel_type}</p>
//                             </div>
//                             <div className="bg-gray-100 px-4 py-6 flex flex-col items-center rounded-lg shadow-md">
//                                 <img src={assets.car_icon} className="h-6 mb-2" alt="Transmission" />
//                                 <p className="text-sm font-medium">{singleCarDetails.transmission}</p>
//                             </div>
//                             <div className="bg-gray-100 px-4 py-6 flex flex-col items-center rounded-lg shadow-md">
//                                 <img src={assets.location_icon} className="h-6 mb-2" alt="Location" />
//                                 <p className="text-sm font-medium">{singleCarDetails.location}</p>
//                             </div>
//                         </div>

//                         <div className="mt-6">
//                             <p className="font-bold text-lg">Description</p>
//                             <p className="mt-2 text-gray-600">{singleCarDetails.description}</p>
//                         </div>

//                         <div className="mt-6">
//                             <h2 className="text-lg font-semibold mb-2">Features</h2>
//                             <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-gray-700">
//                                 {["360 Camera", "Bluetooth", "GPS", "Heated Seats", "Rear View Mirror"].map((feature, index) => (
//                                     <div className="flex items-center gap-2" key={index}>
//                                         <CiCircleCheck className="text-blue-600 text-[20px]" />
//                                         <span>{feature}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Section - Sticky Price Card */}
//                     <div className="sticky top-24 h-fit bg-white shadow-xl p-6 rounded-lg border">
//                         <div className="flex flex-row items-center justify-between">
//                             <p className="text-2xl font-bold text-black-700">${singleCarDetails.pricePerDay}</p>
//                             <p className="text-sm text-gray-500">per day</p>
//                         </div>
//                         {/* You can add more booking logic here */}
//                         <hr className="border-red-600 border-t-[1px] my-4" />

//                         <div className="flex flex-col items-start gap-4">
//                             <div className="flex flex-col w-full gap-2">
//                                 <label className="text-gray-600">Pickup Date</label>
//                                 <input type="Date" name="pickupdate" className="border border-gray-300 rounded-md px-2 py-2" />
//                             </div>
//                             <div className="flex flex-col w-full gap-2">
//                                 <label className="text-gray-600">Return Date</label>
//                                 <input type="Date" name="returndate" className="border border-gray-300 rounded-md px-2 py-2" />
//                             </div>
//                             <button className="bg-[#2563eb] text-center rounded-md text-white p-3 w-full">Book Now</button>
//                             <p className="text-gray-600 font-medium mt-6 text-center w-full">No credit card required to reserve</p>
//                         </div>

//                     </div>

//                 </div>
//             )}
//         </div>
//     );
// };

// export default DetailedCar;
