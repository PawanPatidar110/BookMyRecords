import React from 'react'
import HeroSection from './Components/HeroSection'
import WelComePage from './Components/WelComePage'
import Service from './Components/Service'
import QuoteSection from './Components/QuoteSection'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to="/" >
      <HeroSection/>
      <WelComePage/>
      <Service/>
      <QuoteSection/>
      </Link>
    </>
  )
}

export default Home
