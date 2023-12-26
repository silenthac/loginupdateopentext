
//rafce ->react arrow function components

import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { useState } from 'react'
import { useRef } from 'react'
import { checkValidData } from '../Utils/validate'
import { auth } from '../Utils/Firebase'

import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [SignIn,toogleSignIn] = useState(true);
    const email = useRef(null)
    const password = useRef(null);
    const [message,setMessage] = useState("")
    const navigate = useNavigate()


    const formValidate = () =>{
        // console.log(email)
        // console.log(password)
        const message = checkValidData(email.current.value,password.current.value)
        setMessage(message)
        //if there is some error in email or id
        if(message) return;

        //Sign in Sign up Logic

        if(SignIn)
        {
            //Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user)
    // ...
    navigate('/browse');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode+" "+errorMessage);
  });

        }
        else{

            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate('/browse');
    // console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMessage(errorCode+" "+errorMessage);
    // ..
  });

        }

       



    }
    return (

        <div className=' h-screen ' style={{ background: "linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)" }}>
            {/* <Header/> */}

            <div className='w-full  flex  flex-col max-w-3xl mx-auto  pt-20  my-auto border-black '>
                {/* <p className='m-2  ml-20 text-4xl font-bold text-white'>Opentext Administration  Client</p> */}
                <div className='flex  justify-center items-center'>
                    <p className='m-10  text-4xl ml-5 text-white text-md '><b>Opentext</b><sup>TM </sup>&nbsp;|&nbsp;Archive Center{" "}{" "}<sub>CE 24.1</sub></p>
                </div>

                {SignIn?<p className='flex justify-center m-2  mt-10 mb-10 ml-15  text-xl  text-white'>Sign In to continue to Administation Client</p>:<p className='flex justify-center m-2  mt-10 mb-10 ml-15  text-xl  text-white'>Sign Up to continue to Administation Client</p>}
                <div className='w-50'>
                    <form className='w-full  left-0 right-0 mx-auto flex justify-center items-center flex-col' onSubmit={(e)=>e.preventDefault()} >
                        
                        {!SignIn&&<input type='text'
                         placeholder='Name'
                          className=' text-white p-2 m-2   w-full bg-transparent   rounded-t-md border-b-4 border-blue-200 border-transparent placeholder-blue-200'
                           style={{width:'300px',backgroundColor: 'rgba(255,255,255,0.1)' }}
                            />}

                        <input type='text'
                        ref={email}
                         placeholder='Email Address'
                          className=' text-white p-2 m-2   w-full bg-transparent   rounded-t-md border-b-4 border-blue-200 border-transparent placeholder-blue-200'
                           style={{width:'300px',backgroundColor: 'rgba(255,255,255,0.1)' }}
                            />

                        <input type='password'  ref={password} placeholder='Password' className=' text-white p-2 m-2 w-full bg-transparent  border-transparent border-b-4 border-blue-200 rounded-t-md placeholder-blue-200' style={{width:'300px', backgroundColor: 'rgba(255,255,255,0.1)'}} />
                        <p className='text-red-500 font-bold'>{message}</p>

                        <button onSubmit={(e)=>{e.preventDefault()}} onClick={()=>{formValidate()}} className=' rounded-xl bg-transparent  text-white ml-2  hover:text-white py-3 mt-5 px-10 border border-blue-500  text-blue-500'>{SignIn?"SignIn":"SignUp"}</button>
                    </form>
                </div>


                <div className='flex justify-around mt-10'>
                   {SignIn ?<h1  onClick={()=>{toogleSignIn(!SignIn)}} className='text-white cursor-pointer'>New User? Sign Up..</h1>:<h1  onClick={()=>{toogleSignIn(!SignIn)}} className='text-white cursor-pointer'>Already Registered? Sign In..</h1>}
                   {SignIn&& <h1 className='text-white'>Forgot password?</h1>}
                </div>

                <Footer />




            </div>


        </div>

    )
}

export default Login