import { useState } from 'react'
import './App.css'
import NavDesktop from './components/Navbar/NavDeskop/NavDesktop'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
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
