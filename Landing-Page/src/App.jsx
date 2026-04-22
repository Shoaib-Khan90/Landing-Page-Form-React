import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Features from './components/Features'
import Testimonals from './components/Testimonals'
import Pricing from './components/Pricing'
import Contact from './components/Contact'


function App() {

  return (
    <>
     <Features />
     <Testimonals />
     <Pricing />
     <Contact />
    </>
  )
}

export default App
