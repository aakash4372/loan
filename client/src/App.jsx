import React, { useState, useEffect } from 'react'
import Header from './Pages/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import StepCard from './Pages/StepCard'
import FAQAccordion from './Pages/Faqs'
import Footer from './Pages/Footer'
import EmiCalculator from './Pages/Emicalculator'
import WhatsappFloatButton from './Pages/WhatsappFloatButton'
import Reviews from './Pages/Reivews'
import Documentnavigation from './Pages/Documentnavigation'

// Simple loader component
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-slate-950 via-slate-900 to-violet-950">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // show loader for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <StepCard />
      <FAQAccordion />
      <EmiCalculator />
      <Reviews />
      <Documentnavigation/>
      <WhatsappFloatButton />
      <Footer />
    </div>
  )
}

export default App
