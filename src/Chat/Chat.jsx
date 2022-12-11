import React, { useState,useEffect }  from 'react'
import './Chat.css'
import { IoIosNotifications,IoMdSend } from "react-icons/io";
import { MdGroup,MdLocationOn,MdSearch } from "react-icons/md";
import {FaQuestionCircle,FaGift} from "react-icons/fa";
import {BsFillPlusCircleFill,BsEmojiSmileFill} from "react-icons/bs";
import {HiGif} from "react-icons/hi2";
import Massage from '../Messge/Massage';
import {useSelector } from 'react-redux'
import db from '../firebase'
import { collection, orderBy,Timestamp} from "firebase/firestore"; 
import {getDocs ,addDoc} from "firebase/firestore"; 


const Chat = () => {
    var user1=useSelector(state=>state.userstore.user)
    const [msg,setmsg]=useState(null)

    var actChannel=useSelector(state=>state.userstore.activeChannel)
    // console.log('the active channel is ',actChannel)
    const [actC,setActC]=useState('')
    const [input, setinput] = useState('');
    // `${actC.id}`
    const handelMsg=(e)=>{
        e.preventDefault()
        if(actC?.id){
            addDoc( collection(db, "Channels", actC.id, "messeg"),{
                Time:Timestamp.fromDate(new Date()),
                messge:input,
               user:user1})}

              
          setinput('')
          if(msg){console.log('The MSG handell',msg)}


    }






  useEffect(() => {
   setActC(actChannel)


   if(actC?.id){
    getDocs(collection(db, "Channels", actC.id, "messeg",),orderBy('Time')).then(
        (snap)=>{setmsg(snap.docs.map((doc)=>(
        {id:doc.id,
            data:doc.data(),})))})}
},[handelMsg]);




  return (
    <div className='Chat'>
        <div className="Chat-header">
            <div className="Chat-header-left">
                <h3 className='Channel-Name'><p style={{color:'gray'}}>#</p>{actC?.ChannelsName}</h3>

            </div>
            <div className='Chat-header-right'>
                <IoIosNotifications style={{width:"35px",height:"35px",cursor:'pointer'}}/>
                <MdLocationOn style={{width:"35px",height:"35px",cursor:'pointer'}}/>
                <MdGroup style={{width:"35px",height:"35px",cursor:'pointer'}}/>
                <div className='input-header'>
                    <input type="text" placeholder='Search'/>
                    <MdSearch style={{width:"35px",height:"35px",marginRight:" 9px",cursor:'pointer' ,color:'white'}}/>


                </div>
                <IoMdSend style={{width:"35px",height:"35px",cursor:'pointer'}}/>
                <FaQuestionCircle style={{width:"35px",height:"35px",cursor:'pointer'}}/>


            </div>
        </div>
        <div className="Chat-Msgs">

            {msg?.map(({id,data:{messge,Time,user:{displayName,photoURL}}})=>{
                return(
                <Massage key={id} msg={messge} userP={photoURL} userName={displayName}  Time={Time}  />

                )

            })
                    





            }
        

        </div>
        <div className='Chat-input'>
            <BsFillPlusCircleFill style={{width:'27px',height:'27px',color:'white'}}/>
            <form  >
                <input type="text" placeholder='Writ a massege'
                  disabled={!actC?.id}
                  value={input}
                  onChange={e=> setinput(e.target.value) }
                
                
                />
                <button onClick={handelMsg}>Send</button>
            </form>
            <div className='input-Emo'>
            <FaGift style={{width:'27px',height:'27px',color:'white'}}/>
            <HiGif style={{width:'27px',height:'27px',color:'white'}}/>
            <BsEmojiSmileFill style={{width:'27px',height:'27px',color:'white'}}/>

            </div>
           

        </div>

    </div>
  )
}

export default Chat