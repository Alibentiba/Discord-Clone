import React from 'react'
import './Channel.css'
import {setactiveChannel} from '../Redux/Slice'
import { useDispatch} from 'react-redux'

const Channel = ({id,ChannelsName}) => {
  const dispatch=useDispatch()
  const handelchannel=()=>{
    if(ChannelsName){dispatch(setactiveChannel({id,ChannelsName}))
  }
}

  return (
    <div className='Channel' key={id} onClick={handelchannel}>
      <h4><span className='channel-hash'>#</span>{ChannelsName}</h4>
    </div>
  )
}

export default Channel