import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Loader from './components/Loader'

import LocomotiveScroll from 'locomotive-scroll'
import { AnimatePresence } from "framer-motion"

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      })

      return () => scroll.destroy()
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <div
          data-scroll-container
          className='w-full min-h-screen bg-white'
        >
          <Navbar />
          <Landing />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Cards />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
