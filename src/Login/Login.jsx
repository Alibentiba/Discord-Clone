import React from 'react'
import './Login.css'
import logo from './logo.png'
import {provider} from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    
    const Singin=()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
      .catch((error) => {
          
          const errorCode = error.code;
          const errorMessage = error.message;
         
          const email = error.customData.email;
          
          const credential = GoogleAuthProvider.credentialFromError(error);
          
        });
    }
  return (
    <div className='Login'>
   
     
            <img src={logo} alt="logo" />
            <button onClick={Singin}>SIGN IN</button>

        



    </div>
  )
}

export default Login