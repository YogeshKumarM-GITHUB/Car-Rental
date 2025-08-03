import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import Cars from './pages/Cars.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import DetailedCar from './Components/DetailedCar.jsx'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { getCars } from './features/Cars/Car.js'
import Layout from './Components/Owner/Layout.jsx'
import Dashboard from './Pages/Owner/Dashboard.jsx'
import Addcar from './Pages/Owner/Addcar.jsx'
import ManageCars from './Pages/Owner/ManageCars.jsx'
import ManageBookings from './Pages/Owner/ManageBookings.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const dispatch = useDispatch();

  //by default load all cars 
  // useEffect(() => {
  //   // debugger;
  //   dispatch(getCars())
  // }, []);

  const pathname = useLocation();
  //console.log(pathname)
  return (
    <div className='w-full bg-[#f1f5f9]'>
      {
        !pathname.pathname.includes('owner') && <Navbar />
      }
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/DetailedCar/:_id' element={<DetailedCar />} />
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
