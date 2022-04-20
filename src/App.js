import React, { useState } from 'react'
import data from './data'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <Navbar/>
      <Body/>

    </main>
  )
}

export default App
