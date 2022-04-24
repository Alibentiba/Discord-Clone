import React, { useState } from 'react'
import data from './data'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
import About from './About/About'
import Services from './Services/Services'

import { Portfolio } from './Portfolio/Portfolio'
function App() {
  return (
    <main>
      <Navbar/>
      <Body/>
      <Services/>
      <Portfolio/>

    </main>
  )
}

export default App
