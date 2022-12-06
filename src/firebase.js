// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import "firebase/auth" 
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCMsB6GyU-aMVR5yqWD8Rx5wK9D2KnW7jU",
  authDomain: "discod-8c80d.firebaseapp.com",
  projectId: "discod-8c80d",
  storageBucket: "discod-8c80d.appspot.com",
  messagingSenderId: "482280731464",
  appId: "1:482280731464:web:37ff0bbb39734322d9f97d",
  measurementId: "G-R23QRTXYES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app)
const provider = new GoogleAuthProvider();
export {provider,storage};
export default db;