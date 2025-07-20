const NewsLetter = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto max-w-2xl  mt-10">
                <h1 className="text-[40px] font-bold text-center">Never Miss a Deal!</h1>
                <p className="text-[20px] text-center">Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
                <div className="border border-gray-600 mt-5 flex flex-row items-center w-full rounded-md">
                    <input type="email" placeholder="Enter your email" className="w-full p-2 text-[20px] outline-none" />
                    <button className="bg-[#0558FE] text-white p-2 text-[20px] hover:bg-gray-800 transition duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter;