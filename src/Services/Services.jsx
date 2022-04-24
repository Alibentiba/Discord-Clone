import React from 'react'
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {SiSelenium,SiRedux} from "react-icons/si";
import { FaReact,FaCss3,FaHtml5,FaJsSquare,FaPython} from "react-icons/fa";
import Resume from './Resume.txt'

const Services = () => {
  AOS.init();
  return (
    <div className='Services' id='Services' >
        <div className='Services-left' data-aos="fade-left">
         <span>My Awesome</span>
         <span>services</span>
         <span>Lorem ispum is simpley dummy text of printing of printing Lorem ispum is simpley <br/>dummy text of printing</span>
        
         <a href={Resume} download>
          <button className="button-cv" data-aos="fade-right">Download CV</button>
        </a>
        </div>


        <div className='Services-right' >

          <div className='card1' data-aos="fade-left">
          <h1>QA testing</h1>
          <span> <FaPython/> Python</span>
          <span><SiSelenium/> Selenium</span>
          </div>

          <div className='card2' data-aos="fade-right">
          <h1>Front End Dev</h1>
            <span><FaHtml5/> Html</span>
            <span> <FaCss3/> Css3</span>
            <span><FaJsSquare/> js</span>
            <span><FaReact/> react js</span>
            <span><SiRedux/> Redux</span>
            </div>

       </div>








    </div>
  )
}

export default Services