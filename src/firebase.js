// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import "firebase/auth" 
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyD1iyn6z0VpyCiq3JOGwuJTm9qj48yRfWg",
  authDomain: "clone-c058b.firebaseapp.com",
  projectId: "clone-c058b",
  storageBucket: "clone-c058b.appspot.com",
  messagingSenderId: "515285431940",
  appId: "1:515285431940:web:03652565efde907e13b4d1",
  measurementId: "G-MDC2D5FP3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);
const storage = getStorage(app)
const provider = new GoogleAuthProvider();
export {provider,storage};
export default db;