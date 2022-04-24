import React from 'react'
import './About.css'
import { FaReact,FaCss3,FaHtml5,FaJsSquare,FaPython,FaBootstrap} from "react-icons/fa";
import {SiSelenium,SiRedux} from "react-icons/si";



const About = () => {
  return (
    <section className='About' id='section'>

    <div className='About_title'>

       <h1>.About ME</h1>

      

    </div>

     <div className='About_decription'>
         <p>
     Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development<br/>
      started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog <br/>
      button taught me a lot about HTML & CSS!<br/>
     Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, <br/>
     and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences<br/>
      at Upstatement for a variety of clients.
      I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
      </p>
    </div>


     <div className='About_skills'>
       <div className='About_skills-basice'>
        <FaHtml5 className='About_skills_icon'/>
        <FaCss3 className='About_skills_icon'/>
        <FaJsSquare className='About_skills_icon'/>
        <FaPython className='About_skills_icon'/> 
       </div>
      <div className='About_skills-farmwoks'>
       <FaReact className='About_skills_icon'/>
       <SiRedux className='About_skills_icon'/>
       <SiSelenium className='About_skills_icon'/>
       <FaBootstrap className='About_skills_icon'/> 
      </div>

     </div>





    </section>
  )
}

export default About