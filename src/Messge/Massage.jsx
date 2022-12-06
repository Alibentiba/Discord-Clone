import React from 'react'
import './Massage.css'

const Massage = ({msg,userP,userName,Time}) => {
  var d = new Date("2022-03-25");
  Time = d.toString().slice(0,25);
  return (
    <div className='massage'>
        <img src={userP} alt="" className='Massage-avatar'/>
        <div className="Massage-info">

        <h4>
          {userName}<span>{Time}</span>
        </h4>
        <p>{msg}</p>
        </div>


    </div>
  )
}

export default Massage