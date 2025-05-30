
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Navbar from './Components/Navbar.jsx'
import QuoteSection from './Components/QuoteSection.jsx'
import Service from './Components/Service.jsx'
import WelComePage from './Components/WelComePage.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import ServicePage from './Pages/ServicePage.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/contactUs' element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
