import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Testimonials from './pages/Testimonials'
import Logos from './pages/Logos'
import Subscribe from './pages/Subscribe'
import Footer from './pages/Footer'
import Categories from "./pages/Categories"
import TripBook from "./pages/TripBook"

const App = () => {
  return (
    <div>
      <Navbar />
        <Home />
        <Categories/>
        <Destination/>
        <TripBook/>
        <Testimonials/>
        <Logos/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default App