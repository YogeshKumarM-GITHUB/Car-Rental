import { assets } from '../assets/assets.js';
import { RiMenu2Fill } from "react-icons/ri";
import MenuIcons from './MenuIcons.jsx';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='w-full bg-[#f1f5f9]'>
            <div className='container mx-auto max-w-screen-xl py-4'>
                <div className='flex flex-row items-center justify-between w-full'>
                    <img src={assets.logo} alt="logo" className='cursor-pointer' />
                    <div className='md:hidden p-2'>
                        <RiMenu2Fill onClick={() => setIsOpen(!isOpen)} className='text-[40px] cursor-pointer' />
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex flex-col  md:flex-row items-center justify-between gap-5 text-gray-600'>
                            <MenuIcons />
                        </div>
                    </div>
                </div>

            </div>
            {isOpen && (
                <div className="fixed inset-0 z-[1000]">
                    <div className="bg-[#f1f5f9] flex flex-col w-3/4 sm:w-2/3 md:hidden items-start gap-4 h-full shadow-md px-4 py-6 transition-transform duration-300 ease-in-out transform translate-x-0">
                        <MenuIcons />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Navbar;