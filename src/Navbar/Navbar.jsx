import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>

          <div className='Navbar-left'>
            <h1></h1>
           </div>

        <div className='Navbar-center'>
                 <p>Home</p>
                 <p>services</p>
                 <p>Experien</p>
                 <p>portfolio</p>
                 
        </div>
        
        <div className='Navbar-rigth'>
        <button className='button-contact'>Contact</button>
           </div>




    </div>
  )
}

export default Navbar