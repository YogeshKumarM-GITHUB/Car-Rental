import { assets } from '../../assets/assets.js'
import { useRef, useState } from 'react'

const Addcar = () => {
    const uploadImage = useRef();
    const [image, setImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTransmission, setselectedTransmission] = useState('');
    const [fuelType, setfuelType] = useState('');
    const[location,setlocation]=useState('');
    const InitialState={
        UserProfile: '',
        Brand: '',
        Model: '',
        Year: '',
        DailyPrice:0,
        Category: '',
        Transmission: '',
        FuelType: '',
        SeatingCapacity: '',
        Location: '',
        Descrption: '',
    }

    const[carData,setcarData]=useState(InitialState)


    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
        setcarData({...carData,Category:e.target.value});
    }

    const handleTransmission = (e) => {
        setselectedTransmission(e.target.value);
        setcarData({...carData,Transmission:e.target.value});
    }

    const handlefuelType = (e) => {
        setfuelType(e.target.value);
        setcarData({...carData,FuelType:e.target.value})
    }

    const handlelocation=(e)=>{
        setlocation(e.target.value);
        setcarData({...carData,Location:e.target.value});
    }

    const Category = [
        { "Id": 1, "CategoryName": "Sedan" },
        { "Id": 2, "CategoryName": "SUV" },
        { "Id": 3, "CategoryName": "Van" },
    ]

    const Transmission = [
        { "Id": 1, "TransName": "Automatic" },
        { "Id": 2, "TransName": "Manual" },
        { "Id": 3, "TransName": "Semi-Automatic" }
    ]

    const FuelType = [
        { "Id": 1, "Fuel": "Gas" },
        { "Id": 2, "Fuel": "Diesel" },
        { "Id": 3, "Fuel": "Petrol" },
        { "Id": 4, "Fuel": "Electric" },
        { "Id": 5, "Fuel": "Hybrid" }
    ]

    const Location = [
        { "Id": 1, "location": "New York" },
        { "Id": 2, "location": "Los Angeles" },
        { "Id": 3, "location": "Houston" },
        { "Id": 4, "location": "Chicago" }
    ]


    const handleClick = () => {
        uploadImage.current.click();
        setImage(e)
        
    }

    const handleData=(e)=>{
        const {name,value}=e.target;
        setcarData({...carData,[name]:value})
    }

    return (
        <div>
            <div className="container  max-w-3xl  p-4">
                <h1>Add New Car</h1>
                <p>Fill in details to list a new car for booking, including pricing, availability, and car specifications.</p>
                <form className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
                    <div className='mt-4 flex flex-row gap-2 items-center'>
                        <input ref={uploadImage} type="file" name="file" className='hidden' onChange={(e) => {
                            setImage(URL.createObjectURL(e.target.files[0])), setcarData({...carData,UserProfile:e.target.files[0]})
                        }} />
                        <img onClick={handleClick} src={image ? image : assets.upload_icon} alt="upload" className='h-14' />
                        <p>Upload a picture of your car</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
                        <div className='flex flex-col'>
                            <label>Brand</label>
                            <input type="text"
                                name="Brand"
                                value={carData.Brand}
                                placeholder='e.g. BMW, Mercedes, Audi...'
                                className='px-4 py-2 rounded-md border border-gray-300 outline-none'
                                onChange={handleData}
                                
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label>Model</label>
                            <input type="text" name="model" placeholder='e.g. X5, X6...'
                                className='px-4 py-2 rounded-md border border-gray-300 outline-none' value={carData.Model}  onChange={handleData} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-2'>
                        <div className='flex flex-col'>
                            <label>Year</label>
                            <input  onChange={handleData} value={carData.Year} type="number" name="year" className='px-4 py-2 rounded-md border border-gray-300 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label>Daily Price($)</label>
                            <input  onChange={handleData} value={carData.DailyPrice} type="number" name="dailyprice" className='px-4 py-2 rounded-md border border-gray-300 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label>Category</label>
                            <select  name="category" value={selectedCategory} onChange={handleChange} className='px-4 py-2 border border-gray-300 outline-none rounded-md'>/
                                <option value="">Select Category</option>
                                {
                                    Category.map((catName, index) => {
                                        return (
                                            <option key={catName.Id} value={catName.CategoryName}>{catName.CategoryName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-2'>
                        <div className='flex flex-col'>
                            <label>Transmission</label>
                            <select name="Transmission" value={selectedTransmission} onChange={handleTransmission} className='px-10 py-2 border border-gray-300 outline-none rounded-md'>
                                <option value="">Select a transmission</option>
                                {
                                    Transmission.map((trans, index) => {
                                        return (
                                            <option key={trans.Id} value={trans.TransName}>{trans.TransName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label>Fuel Type</label>
                            <select name="fueltype" value={fuelType} onChange={handlefuelType} className='px-4 py-2 border border-gray-300 outline-none rounded-md'>
                                <option value="">Select a fuel type</option>
                                {
                                    FuelType.map((fuel, index) => {
                                        return (
                                            <option key={fuel.Id} value={fuel.Fuel}>{fuel.Fuel}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label>Seating Capacity</label>
                            <input  onChange={handleData} type="number" name="seatingcapacity" placeholder='0'
                              value={carData.SeatingCapacity}  className='px-4 py-2 rounded-md border border-gray-300 outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                            <label>Location</label>
                             <select name="location" value={location} onChange={handlelocation} className='px-4 py-2 border border-gray-300 outline-none rounded-md'>
                                <option value="">Select a location</option>
                                {
                                    Location.map((loc, index) => {
                                        return (
                                            <option key={loc.Id} value={loc.location}>{loc.location}</option>
                                        )
                                    })
                                }
                            </select>
                    </div>
                     <div className='flex flex-col w-full'>
                            <label>Descrption</label>
                            <textarea type="text" name="descrption" placeholder='eg. descrption name'
                                onChange={handleData} className='px-4 py-4 rounded-md border border-gray-300 outline-none' value={carData.Descrption} />
                   </div>
                   <div className='flex flex-col'> 
                     <button className='bg-[#2563EB] text-white p-2 rounded-md cursor-pointer'>List your car</button>
                   </div>
                </form>
            </div>
        </div>
    )
}
export default Addcar