import React from "react"
import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Hero />
    </div>
  )
}

export default App
