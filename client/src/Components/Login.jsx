import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const Login = ({setshowLoginForm}) => {
    const[isAccountAvail,setisAccountAvail]=useState(false);
    return (
        <div className='fixed inset-0 bg-opacity-50 bg-black flex justify-center items-center h-screen z-[2000]'>
            <div className='bg-white  max-w-md px-10 py-10 rounded-md text-center'>
               <div className="w-full  flex justify-end">
                <IoIosCloseCircle onClick={()=>setshowLoginForm(false)} className=" text-3xl cursor-pointer" />
                </div>
                <div>
                    <p className='text-[25px] font-bold'><span className='text-[#2563EB] text-[25px]'>User </span>Login</p>
                </div>
                {
                    isAccountAvail && (<div className='flex flex-col items-start mt-4'>
                        <label>Name</label>
                        <input type="text" name="name" placeholder='type here' className='px-2 w-full outline outline-none border border-gray-300 rounded-md py-1' />
                    </div>)
                }
                <div className='flex flex-col items-start mt-4'>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='type here' className='px-2 w-full outline outline-none border border-gray-300 rounded-md py-1' />
                </div>
                <div className='flex flex-col items-start mt-4'>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='type here' className='px-2 w-full outline outline-none border border-gray-300 rounded-md py-1' />
                </div>
                <div className='mt-4'>
                    <p> {isAccountAvail ? "Already have account?" : "Create an account?"}<span onClick={() => setisAccountAvail(!isAccountAvail)} className='text-[#2563EB] cursor-pointer'> click here</span></p>
                </div>
                <button className='text-white bg-[#2563EB] mt-4 w-full rounded-md py-2 cursor-pointer'>Login</button>
            </div>
        </div>
    )
}
export default Login