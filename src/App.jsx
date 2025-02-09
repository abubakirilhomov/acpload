import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import HeroSection from './components/Showcase/Showcase'
import About from './components/About/About'
import HowItWorks from './components/HowItWorks/HowItWorks'
import ContactUs from './components/ContactUs/ContactUs'

function App() {

  return (
    <>
    <Header/>
    <main className='pt-20'><Outlet/></main>
    <Footer/>
    </>
  )
}

export default App
