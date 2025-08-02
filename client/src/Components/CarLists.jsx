import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { useGetCarQuery } from "../features/Cars/carsSlice.js";
import CarData from "./CarData.jsx";

const CarLists = () => {
    const { data:cars } = useGetCarQuery();
    


    return (
        <div>
            <div className="container mx-auto max-w-xl mt-20">
                <h1 className="text-[40px] font-bold text-center">Available Cars</h1>
                <p className="text-gray-500 text-[20px] text-center ">Browse our selection of premium vehicles available for your next adventure</p>
                <div className="flex flex-row items-center justify-between mt-4 bg-white py-2 rounded-full px-2">
                    <CiSearch className="text-[25px] font-bold cursor-pointer" />
                    <input type="text" className="outline outline-none  w-full rounded-full py-2 px-2" placeholder="Search by make, model or features" name="search" />
                    <CiFilter className="text-[25px] font-bold cursor-pointer" />
                </div>
            </div>
            {/* list of cars */}
            <div>
                <p className="container mx-auto max-w-6xl mt-4 text-gray-600">Showing {cars.length} Cars</p>
                <CarData cars={cars} />
            </div>
        </div>
    )
}
export default CarLists;