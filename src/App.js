import React, { useEffect} from 'react'
import './App.css'
import Chat from './Chat/Chat'
import Login from './Login/Login'
import Sidbar from './Sidbar/Sidbar'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux'
import {LoginA} from './Redux/Slice'
const App = () => {
  var user1=useSelector(state=>state.userstore.user)

  const dispatch=useDispatch()
  useEffect(() => {
  const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
     if (user) {
   
    dispatch(LoginA({displayName:user.displayName,
      photoURL:user.photoURL,
      email:user.email
      
    }))
    console.log('the user information is',user)
  
  } else {
    console.log('Makach')
  }
});

}, [dispatch]);




  return (
    <div className='App'>

{user1?(<><Sidbar/>
        <Chat/></>):<Login/>}

        



     
    </div>
  )
}

export default App