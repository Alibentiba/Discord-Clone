import React from 'react'
import './Sidbar.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiPlus,BiInfoCircle,BiHeadphone} from "react-icons/bi";
import { FaSignal } from "react-icons/fa";
import { IoIosCall,IoMdMic,IoMdSettings } from "react-icons/io";
import Channel from '../Channel/Channel';
import { useDispatch, useSelector } from 'react-redux'
import {Logout} from '../Redux/Slice'
import { getAuth } from "firebase/auth";
import db from '../firebase'
import { collection, getDocs ,addDoc} from "firebase/firestore"; 
import { useState } from 'react';
import { useEffect } from 'react';



const Sidbar = () => {
  const [Channels,setChannels]=useState(null)
  const auth = getAuth();
  var user1=useSelector(state=>state.userstore.user)
  const dispatch=useDispatch()
  const singout=()=>{
    dispatch(Logout())
    auth.signOut()}
    const handelChannel=()=>{

      const ChannelsName=prompt('Enter The Channel Name')
      if(ChannelsName){
        addDoc(collection(db,"Channels"),{ChannelsName:ChannelsName,messge:''})
  
      }
     }   
  
    useEffect(()=>{
      const col= collection(db,'Channels')
      getDocs(col).then((snap)=>{setChannels(snap.docs.map((doc)=>(
     {id:doc.id,
     data:doc.data(),})))})
                       
  },[handelChannel])

  return (
    <div className='Sidbar'>
      
      <div className="Sidbar-Channels">
      <div className='Sidbar-top'>
        <h4>Descord-Clone</h4>
        <MdKeyboardArrowDown/>
      </div>
        <div className="Sidbar-Channels-header">
        <MdKeyboardArrowDown/><span>Text Channels</span><BiPlus onClick={handelChannel}/>
        </div>
       {Channels?.map(({id,data:{ChannelsName}})=>{
        return( <Channel key={id}
          id={id}
           ChannelsName={ChannelsName}/>)
     


       })



       }



        
  
      </div>



      
      <div className='Sidbar-bottom'>
        <div className='Sidbar-signl'>
          <FaSignal style={{color:'green',width: '29px',height: '28px'}}/>
          <span><h4 className='stream-text'>Voice connected</h4>Stream</span>
          <div className='Sidbar-icons'>
          <BiInfoCircle/>
            <IoIosCall/>
          </div>


        </div>
        <div className='Sidbar-signl' style={{borderBottom:'none'}}>
          <img src={user1?.photoURL} style={{color:'green',cursor:'pointer'}} alt='img' onClick={singout}/>
          <span style={{color:"gray"}}><h4 className='stream-text' style={{color:'white'}}>{user1?.displayName}</h4>#CNNBKM</span>
          <div className='Sidbar-icons'>
          <IoMdMic/>
          <BiHeadphone/>
          <IoMdSettings/>
           

          </div>


        </div>




      </div>



    </div>
  )
}

export default Sidbar