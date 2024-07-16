// src/components/Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import AuthDetails from "./AuthDetails";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

 
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const provider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error, "errorr");
        toast.error("Kullanıcı adı veya şifre hatalı!",error.message);
      });
     console.log("Signup:", { email, password });
  };

  const signGoogle = async () => {
      try {
            const data = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(data);
          const token = credential.accessToken;
          const user = data.user;
          if(user){
            window.location="/home";
          }      
            
      } catch (error) {
            const credential = GoogleAuthProvider.credentialFromError(error);
            toast.error(credential);
      }
        }

  return (
      <div className="my-auto">
        <h1 className="text-2xl p-3">SIGNUP PAGE</h1>
      <Toaster/>
      <div className="my-auto flex">
              <button className="bg-orange-400 text-white p-2 rounded-md mx-auto" onClick={signGoogle}>
              <h1 className="text-xl cursor-pointer">Sign In With Google</h1>
              </button>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="border-2   mt-8 justify-center mx-auto ">
        <div className="">
              <h1 className="text-xl p-3 rounded-lg bg-blue-200">SIGN UP WITH EMAIL</h1>
  
              </div>
              <div className="m-4 flex max-w-min max-w-l mx-auto border-2  ">
              <input
                className="border-2 rounded-md p-2 border-gray-400"
                type="text"
                value={email}
                placeholder="Email : you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-4 flex max-w-min mx-auto">
              <input
                className="border-2 rounded-md p-2 border-gray-400"
                type="password"
                value={password}
                placeholder="Password: min 6 characters"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

          <button
              className="rounded-md p-3 min-w-28 mx-auto bg-blue-500 text-white flex justify-center"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <AuthDetails />
    </div>


  );
};

export default Signup;
