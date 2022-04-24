import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>

          <div className='Navbar-left'>
            <h1></h1>
           </div>

        <div className='Navbar-center'>
          
                 <a href="#section" className="btn">About</a>
                 <a>Services</a>
                 <a>Experien</a>
                 <a>portfolio</a>
                 
        </div>
        
        <div className='Navbar-rigth'>
        <button className='button-contact'>Contact</button>
           </div>




    </div>
  )
}

export default Navbar