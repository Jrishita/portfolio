import React from 'react'
import Navbar from "./components/basics/Navbar"
import Intro from "./components/intro/Intro"
import Services from "./components/Service/Services"
import './app.css'
import Exep from './components/exe/Exep'
import Works from './components/work/Works'
import Portfo from './components/portfo/Portfo'
import Contact from './components/contact/Contact'
import Foot from './components/footer/Foot'

function App() {
  return (
    <div className='App'>

      <Navbar />
      <Intro />
      <Services />
      <Exep />
      <Works />
      <Portfo />
      <Contact />
      <Foot />

    </div>

  )


}

export default App;