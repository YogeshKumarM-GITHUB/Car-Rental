import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
const CarData = ({cars}) => {
    console.log('CarDataComp',cars)
    const navigate=useNavigate();
    return (
        <div>
           
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container mx-auto max-w-6xl mt-4'>
                
                {
                    cars && cars.Data.length > 0 && cars.Data.map((car, index) => {
                        return (
                            
                            <div key={car._id} className='shadow-md rounded-md cursor-pointer'>
                                
                                <div className='relative'>
                                    <img src={car.UserProfile} alt={car.Brand} onClick={()=>navigate(`/DetailedCar/${car._id}`)} className={`w-full h-[192px] object-cover rounded-md transform transition-all duration-300 ease-out hover:-translate-y-1`} />
                                    {car.isAvaliable && <p className='absolute top-2 left-2 bg-purple-500 rounded-full text-white p-1'>Available Now</p>}
                                    <p className='absolute bottom-2 right-4 bg-black text-white p-2 rounded-full'>${car.DailyPrice} / day</p>
                                </div>
                                <div className='p-4 mt-2'>
                                    <div>
                                        <h1 className='text-[20px] font-bold'>{car.Brand} {car.Model}</h1>
                                        <p className='text-[15px]'>{car.Category}.{car.Year}</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-between mt-4 text-gray-600'>
                                        <div className='flex flex-row gap-2'>
                                            <img src={assets.users_icon} className='w-5' /> {car.SeatingCapacity} Seats
                                        </div>
                                        <div className='flex flex-row gap-2 text-gray-600'>
                                            <img src={assets.fuel_icon} className='w-5' /> {car.FuelType} Seats
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center justify-between mt-4'>
                                        <div className='flex flex-row gap-2 text-gray-600'>
                                            <img src={assets.carIcon} className='w-5' /> {car.Transmission} Seats
                                        </div>
                                        <div className='flex flex-row gap-2 text-gray-600'>
                                            <img src={assets.location_icon} className='w-5' /> {car.Location} 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CarData;