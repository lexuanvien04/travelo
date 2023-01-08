import React from 'react'
import './Home.css'
import ScrollToTop from './ScrollToTop'
import Navbar from './Navbar'
import Hero from './Hero'
import NewTour from './NewTour'
import Footer from './Footer'
import PopularTour from './PopularTour'
import Services from './Services'
import Gallery from './Gallery'

export default function Home() {
  return (
    <div className='Home'>
        <ScrollToTop />
        <Navbar />
        <Hero />
        <NewTour />
        <PopularTour />
        <Services />
        <Gallery /> 
        <Footer />
    </div>
  )
}
