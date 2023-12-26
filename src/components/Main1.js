import React from 'react';
import  { useState } from 'react'
import NewComp from './NewComp';
import { useDispatch } from 'react-redux';
// import { addTodo } from './todoSlice';
import Button from './Button';

import { useSelector } from 'react-redux';

import { Services } from './DummyApi';
const Main1 = () => {
    const [data, setdata] = useState(Services);
    const [state1,setstate1] = useState(false);
    const [state2,setstate2] = useState(false);
    const [statebet,setstatebet] = useState(false);
    const [state3,setstate3] = useState(false);
    const dispatch = useDispatch();

    const  val = useSelector((state) =>state.IP)
  return (
    
        <div class="w-1/4  border min-h-screen    bg-gray-200 ">
                <div className='flex m-2'>
                    <button  onClick={()=>{setstate1(!state1);}} type="button" class="flex  w-full p-2 text-base font-normal text-black transition duration-75 rounded-lg group hover:bg-gray-500 dark:text-white dark:hover:bg-gray-700">
                  {/* <span class="flex-1 ml-3 font-bold text-black text-left whitespace-nowrap" sidebar-toggle-item>Shared Services</span> */}
                  <Button name = "Home"/>
                  </button>
                    
                </div>

     
                
                
				{state1&&
               <div className=' pl-3 flex m-2'>
               
               <button  onClick={()=>setstate2(!state2)} type="button" class="flex items-center w-full p-2 text-base font-normal font-bold text-black transition duration-75 rounded-lg group hover:bg-gray-500 dark:text-white dark:hover:bg-gray-700">
             <Button name = "Archive Server"/>
             </button>
                
               
           </div>
}

                { state1&& state2&&<div className='flex flex-col ml-12 text-black '>
                    {
                        data.map((d)=>{
                            
                            return <NewComp key = {d.id} {...d}/>
                        })
                    }
                    

                    

                    </div>}

            </div>
    
  )
}

export default Main1