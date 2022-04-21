import React, { useState } from 'react'
import data from './data'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
import About from './About/About'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <Navbar/>
      <Body/>
      <About/>

    </main>
  )
}

export default App
