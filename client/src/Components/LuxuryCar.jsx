import { assets } from '../assets/assets.js'

const LuxuryCar = () => {
    return (
        <div className="bg-white">
            <div className='container mx-auto max-w-6xl bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] rounded-md  p-4'>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className='max-w-lg p-10 text-white'>
                        <h1 className='font-bold text-[30px]'>Do You Own a Luxury Car?</h1>
                        <p className='text-[15px] mt-2'>Monetize your vehicle effortlessly by listing it on CarRental.
                            We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>
                        <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-[#0558FE] rounded-lg text-sm mt-4 cursor-pointer'>List your car</button>
                    </div>
                    <div>
                        <img src={assets.banner_car_image} alt="bannerImage" className='object-cover w-[379px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LuxuryCar;