// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA_6yCQh9hkLaE2dcuXuSiDC7xM33jP8o",
  authDomain: "roketworks-auth.firebaseapp.com",
  projectId: "roketworks-auth",
  storageBucket: "roketworks-auth.appspot.com",
  messagingSenderId: "760835113972",
  appId: "1:760835113972:web:88235f6da39a21e1af6fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};