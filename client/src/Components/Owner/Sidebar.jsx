import { assets } from '../../assets/assets.js'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const Sidebar = () => {
    const[selectedimg,setimg]=useState("");
    const fileInputRef = useRef();
   console.log(selectedimg)
    const handleIconClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div>
            <div className='w-11 md:w-60 h-screen bg-white border-r shadow-sm'>
                <div className='relative mt-2 w-20 h-20 group   md:ml-14'>
                    <div className='mt-2'>
                        <img
                            src={ selectedimg ? selectedimg : assets.user_profile}
                            className='w-10 h-10 md:w-20 md:h-20 rounded-full object-cover'
                            alt="Profile"
                        />

                        {/* Edit icon shown on hover */}
                        <div
                            className='absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
                            onClick={handleIconClick}
                        >
                            <FaEdit className='text-white text-lg' />
                        </div>

                        {/* Hidden file input */}
                        <input
                            type='file'
                            ref={fileInputRef}
                            className='hidden'
                            onChange={(e) => {
                                // handle file upload logic here
                                setimg(URL.createObjectURL(e.target.files[0]));
                            }}
                        />
                    </div>
                    <p className='text-center uppercase hidden md:block'>yogesh</p>
                </div>
                <nav className='flex flex-col items-start md:p-4 gap-2 mt-2'>
                    <NavLink to='/owner/Dashboard' className="flex items-start md:items-center gap-3 p-2 hover:bg-gray-100 rounded">
                        <img src={assets.dashboardIcon} /> <p className='hidden md:block'>Dasboard</p>
                    </NavLink>
                    <NavLink className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
                        <img src={assets.addIcon} /> <p className='hidden md:block'>Add Car</p>
                    </NavLink>
                    <NavLink className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
                        <img src={assets.carIcon} /> <p className='hidden md:block'>Manage Cars</p>
                    </NavLink>
                    <NavLink className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded">
                        <img src={assets.listIcon} /> <p className='hidden md:block'>Manage Bookings</p>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}
export default Sidebar;