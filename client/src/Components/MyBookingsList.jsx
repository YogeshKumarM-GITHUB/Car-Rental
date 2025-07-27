import { assets, dummyCarData } from '../assets/assets'
const MyBookingsList = () => {
    return (
        <div className="bg-white">
        <div className="container mx-auto max-w-80  md:max-w-screen-xl bg-white mt-10">
                <h1 className="text-[40px] font-bold">My Bookings</h1>
                <p className="text-gray-600">View and manage your all car bookings</p>
                <div className="grid grid-cols-1 md:grid-cols-4  border border-gray-300 p-4 mt-3 max-w-5xl py-5 rounded-md">
                    <div className="col-span-1 flex flex-col items-start">
                        <img src={assets.car_image1} alt="" className='h-28 rounded-md' />
                        <p className='font-bold mt-2'>BMW X5</p>
                        <p className='text-gray-500'>2006 . SUV . New York</p>
                    </div>
                    <div className="col-span-2 flex flex-col items-start mt-4 md:mt-0">
                        <span>
                            <label className='bg-gray-300 px-3 rounded-md'>Booking #1</label>
                            <label className='bg-gray-300 text-orange-400 px-3 rounded-md ml-2'>Pending</label>
                        </span>
                        <div className="flex items-start gap-3 mt-2">
                            <img
                                src={assets.calendar_icon_colored}
                                alt="calendar"
                                className="w-6 h-6 mt-1"
                            />
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 font-medium">Rental Period</p>
                                <p className="text-sm font-semibold text-black">2025-10-01 To 2025-10-06</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 mt-2">
                            <img
                                src={assets.location_icon_colored}
                                alt="calendar"
                                className="w-6 h-6 mt-1"
                            />
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 font-medium">Pick-up Location</p>
                                <p className="text-sm font-semibold text-black">New York</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 mt-5 flex flex-col items-start ml-2">
                        <p className="text-sm text-gray-500 font-medium">Total Price</p>
                        <p className='text-[20px] text-[#2563EB] font-medium'>$1500</p>
                        <p className="text-sm text-gray-500 font-medium">Booked on 2025-07-26</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyBookingsList;