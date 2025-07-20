import { assets } from '../assets/assets.js'
const Footer = () => {
    return (
        <div className='mt-10 bg-white'>
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4">
                    <div className='max-w-[350px] mt-2'>
                        <img src={assets.logo} alt="logo" className='cursor-pointer' />
                        <p className='text-gray-600 mt-2'>Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.</p>
                        <div className='flex flex-row items-center gap-4 mt-2 cursor-pointer'>
                            <img src={assets.facebook_logo} alt="facebook" />
                            <img src={assets.instagram_logo} alt="instagram" />
                            <img src={assets.twitter_logo} alt="twitter" />
                            <img src={assets.gmail_logo} alt="gmail" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-20 mt-1'>
                        <div>
                            <h1 className='uppercase font-bold mt-4 md:mt-0'>Quick Links</h1>
                            <ul className='text-gray-600 cursor-pointer flex flex-col items-start gap-1 mt-1'>
                                <li>Home</li>
                                <li>Browse Cars</li>
                                <li>List Your Car</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='uppercase font-bold'>Resources</h1>
                            <ul className='text-gray-600 cursor-pointer flex flex-col items-start gap-1 mt-1'>
                                <li>Help Center</li>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                                <li>Insurance</li>
                            </ul>
                        </div>
                        <div className='max-w-[150px]'>
                            <h1 className='uppercase font-bold'>Contact</h1>
                            <p className='text-gray-600 mt-1'>
                                1234 Luxury Drive
                                San Francisco, CA 94107
                                +1 234 567890
                                info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;