// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9SR2bW3VthkMAA7cbLG_7Pq-Cmgz1l8",
  authDomain: "ema-john-simple-3c1b3.firebaseapp.com",
  projectId: "ema-john-simple-3c1b3",
  storageBucket: "ema-john-simple-3c1b3.appspot.com",
  messagingSenderId: "1062614238511",
  appId: "1:1062614238511:web:6fa2426354b73378010dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
