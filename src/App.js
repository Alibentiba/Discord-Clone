import React, { useState } from 'react'
import data from './data'
import Navbar from './Navbar/Navbar'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <Navbar/>
    </main>
  )
}

export default App
