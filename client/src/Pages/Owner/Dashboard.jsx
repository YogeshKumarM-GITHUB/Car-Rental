import { assets } from "../../assets/assets";
const Dashboard = () => {
    return (
        <div className="container  max-w-screen-xl p-4 ">
            <div className="flex flex-col items-start w-full">
                <h1 className="font-bold text-[30px]">Admin Dashboard</h1>
                <p className="text-gray-800 max-w-md">Monitor overall platform performance including total cars, bookings, revenue, and recent activities</p>
                <div className="w-full flex flex-col md:flex-row gap-2 mt-4">

                    <div className="flex flex-row justify-between gap-x-8 py-2 rounded-md mt-2 border border-gray-300 px-5">
                        <div className="flex flex-col">
                            <p>Total Cars</p>
                            <p>0</p>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                            <img src={assets.carIconColored} alt="" className="h-4 w-4" />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-x-8 py-2 rounded-md mt-2 border border-gray-300 px-5">
                        <div className="flex flex-col">
                            <p>Total Bookings</p>
                            <p>0</p>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                            <img src={assets.listIconColored} alt="" className="h-4 w-4" />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-x-8 py-2 rounded-md mt-2 border border-gray-300 px-5">
                        <div className="flex flex-col">
                            <p>Penidng</p>
                            <p>0</p>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                            <img src={assets.cautionIconColored} alt="" className="h-4 w-4" />
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-x-8 py-2 rounded-md mt-2 border border-gray-300 px-5">
                        <div className="flex flex-col">
                            <p>Confirmed</p>
                            <p>0</p>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                            <img src={assets.listIconColored} alt="" className="h-4 w-4" />
                        </div>
                    </div>

                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-2 w-full md:w-2/3">
                        <div className=" border border-gray-300  rounded-md p-4">
                            <h1 className="font-bold">Recent Booking</h1>
                            <p className="mt-2">Latest customer bookings</p>
                        </div>
                        <div className="border border-gray-300  rounded-md p-4">
                            <h1 className="font-bold">Monthly Revenue</h1>
                            <p>Revenue for current month</p>
                            <p className="text-[#2563EB] mt-2">$0</p>
                        </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;