import FeaturedVehicles from "../Components/FeaturedVehicles";
import HeroSection from "../Components/HeroSection";
import LuxuryCar from "../Components/LuxuryCar";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Testimonal from "../Components/Testimonal";
import { assets } from "../assets/assets";

const Home=()=>{
    return(
        <div>
             <HeroSection/>
             <FeaturedVehicles/>
            <div className="bg-white text-center p-5">
                <button className="w-[150px] py-1 border border-gray-400 rounded-md cursor-pointer transform transition-all duration-300 ease-in-out hover:bg-gray-300">Explore all cars <span className="inline-block"><img src={assets.arrow_icon}/></span></button>
            </div>
            <LuxuryCar/>
            <Testimonal/>
            <NewsLetter/>
        </div>
    )
}
export default Home;