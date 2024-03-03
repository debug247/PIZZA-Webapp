import React from 'react'
import Hero from './sections/Hero'
import { DarkModeProvider } from './DarkModeContext'
import About from './sections/About'
import BestSellers from './sections/BestSellers'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import Header from './sections/Header'
import Footer from './sections/Footer'
import TopRated from './sections/TopRated'

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSellers />
        <Faq />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  )
}

export default App