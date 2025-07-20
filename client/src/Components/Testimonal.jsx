import { assets } from '../assets/assets.js'

const Testimonal = () => {
    const TestimonalData = [
        {
            "id": 1,
            "name": "Yogesh Kumar M",
            "address": "Bengaluru, India",
            "descrption": "I've rented cars from various companies, but the experience with CarRental was exceptional.",
        },
        {
            "id": 2,
            "name": "Mahesh Kumar M",
            "address": "Bengaluru, India",
            "descrption": "I've rented cars from various companies, but the experience with CarRental was exceptional.",
        },
        {
            "id": 3,
            "name": "Lokesh Kumar M",
            "address": "Bengaluru, India",
            "descrption": "I've rented cars from various companies, but the experience with CarRental was exceptional.",
        }
    ]
    return (
        <div className="bg-white">
            <div className='container mx-auto max-w-6xl  p-4 mt-10'>
                <div className="text-center">
                    <h1 className="font-bold text-[40px]">What Our Customers Say</h1>
                    <p className="text-gray-600">Discover why discerning travelers choose StayVenture for their luxury accommodations around the world.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {TestimonalData.map((test, index) => {
                        return (
                            <div key={test.id} className="shadow-lg p-4 rounded-md mt-4 max-w-96">
                                <div className="flex flex-row items-start">
                                    <img src={assets.user_profile} alt="testimonal" className='w-14 rounded-full' />
                                    <div className='ml-2'>
                                        <p className='font-bold'>{test.name}</p>
                                        <p className='text-gray-400'>{test.address}</p>
                                    </div>
                                </div>
                                <div className='mt-2 flex flex-row gap-1'>
                                    {
                                        Array(5).fill().map((_, index) => (
                                            <img src={assets.star_icon} key={index} className="text-yellow-500" />
                                        ))
                                    }
                                </div>
                                <div className='mt-4 text-gray-600'>
                                    <p>{test.descrption}</p>
                                </div>
                            </div>
                        )
                    })
                    }


                </div>
            </div>
        </div>
    )
}
export default Testimonal;