import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Showcase/Showcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection/>
    <Footer/>
    </>
  )
}

export default App
