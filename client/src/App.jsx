import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import DetailedCar from './Components/DetailedCar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getCars } from './features/Cars/Car.js'
import Login from './Components/Login.jsx'
import Layout from './Components/Owner/Layout.jsx'
import Dashboard from './Pages/Owner/Dashboard.jsx'
import Addcar from './Pages/Owner/Addcar.jsx'
import ManageCars from './Pages/Owner/ManageCars.jsx'
import ManageBookings from './Pages/Owner/ManageBookings.jsx'


function App() {
  const dispatch = useDispatch();

  //by default load all cars 
  // useEffect(() => {
  //   // debugger;
  //   dispatch(getCars())
  // }, []);

  const pathname = useLocation();
  console.log(pathname)
  return (
    <div className='w-full bg-[#f1f5f9]'>
      {
        !pathname.pathname.includes('owner') && <Navbar />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        {/* <Route path='/DetailedCar/:_id' element={<DetailedCar />} /> */}
        <Route path='/my-bookings' element={<MyBookings />} />

        {/* owner route */}
        <Route path='/owner/' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='add-car' element={<Addcar />} />
          <Route path='manage-cars' element={<ManageCars/>}/>
          <Route path='manage-bookings' element={<ManageBookings/>}/>
        </Route>

      </Routes>
      {
        !pathname.pathname.includes('owner') && <Footer />
      }

    </div>
  )
}

export default App
