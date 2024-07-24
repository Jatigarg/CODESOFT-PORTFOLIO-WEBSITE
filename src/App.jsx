import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Certificate from './components/Certificate'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Certificate />
        <Project />
        <Contact />
        <Footer />
      </div>
      <Toaster/>
    </>
  )
}

export default App
