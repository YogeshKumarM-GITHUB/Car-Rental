import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  return (
    <div className='w-full bg-[#f1f5f9]'> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
