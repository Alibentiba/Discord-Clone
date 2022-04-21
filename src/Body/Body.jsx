import React from 'react'
import './Body.css'
import { FaGithubSquare,FaLinkedin,} from "react-icons/fa";
import { SiGmail} from "react-icons/si" 
import pic from './pic.png'    


const Body = () => {
  return (
    <div className='Body'>
        <div className='Body-left'>
            <p className='body-p1'>Hy ! I'm </p>
            <p className='body-p2'>Amar Mrz</p>
            <p className='body-p3'>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</p>
            <button className='button-contact'>Hire me</button>

            <div className='Body-left-icons'>
              <FaGithubSquare className='icons' />
              <FaLinkedin className='icons'/>
              <SiGmail className='icons'/>
            </div>
           </div>
    


        <div className='Body-rigth'>
          <img src={pic} alt="pic de amar" className='Bodu-pic' />
          </div>



    </div>
  )
}

export default Body