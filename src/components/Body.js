import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter,o } from 'react-router-dom'
import Login from './Login'
import Header from './Header'

import {onAuthStateChanged} from 'firebase/auth'
import { auth } from '../Utils/Firebase'
import Main from './Main'




const Body = () => {

    const appRouter = createBrowserRouter([{
        path: "/",
        element:<Login/>
    },
    {
      path: "/browse",
        element:<Main/>

    }
])


useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // const uid = user.uid;
      // const {displayName,uid} = user
      // console.log(displayName)
      
      // console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

},[])


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body