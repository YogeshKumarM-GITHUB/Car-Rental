import { NavLink, Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
const MenuIcons = () => {
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Cars</NavLink>
            <NavLink to='/'>My Bookings</NavLink>
            <NavLink to='/'>
                List cars
            </NavLink>
            <div className={`hidden md:block`}>
                <div className='hidden md:flex flex-row items-center border border-gray-600 rounded-full py-1'>
                    <input
                        type="text"
                        placeholder="Search Cars"
                        className="bg-[#f1f5f9] px-4 outline-none rounded-full"
                    />
                    <CiSearch />
                </div>
            </div>
            <button className='text-white bg-[#2563eb] px-4 py-2 rounded-md cursor-pointer  transition-all duration-300 ease-in-out hover:bg-purple-500'>Login</button>
        </>
    )
}
export default MenuIcons;