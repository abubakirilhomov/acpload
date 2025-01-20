import { useState } from 'react'
import './App.css'
import NavDesktop from './components/Navbar/NavDeskop/NavDesktop'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import useFetch from './hooks/useFetch/useFetch'

function App() {
  
  return (
    <>
      <header>
        <NavDesktop/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
