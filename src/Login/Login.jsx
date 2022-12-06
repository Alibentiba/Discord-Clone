import React from 'react'
import './Login.css'
import logo from './logo.png'
import {provider} from '../firebase'
import { getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
    
    const Singin=()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
      
    }
  return (
    <div className='Login'>
   
     
            <img src={logo} alt="logo" />
            <button onClick={Singin}>SIGN IN</button>

        



    </div>
  )
}

export default Login