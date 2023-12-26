import React, { useState } from 'react'
import { addTodo } from './todoSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// onClick={()=>setshow(!show)}



const NewComp = ({Name,ele}) => {
    const [show,setshow] = useState(false)
    const [tempdata,settempdata] = useState([]);
    const [data,setdata] = useState('')
    // console.log(data.Name);
    const dispatch = useDispatch()
    


    const fun1 = () =>{
      setshow(!show);
      
    }

    const fun2 = (temp) =>{
      setdata(temp)
      dispatch(addTodo(temp.Name))
      // localStorage.setItem("REALIP":)
      

      
    }
    
    


    

   
    
    


  return (
    <div className='flex flex-col '>
        {/* { show? <h1  onClick={()=>{fun1()}} className =' text-blue-500 font-bold cursor-pointer' >{Name}</h1>:<h1 onClick={()=>{fun1();fun2({Name})}} className ='font-bold cursor-pointer'>{Name}</h1>} */}
        {/* <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}

     {  show? <button  onClick={()=>{fun1()}} type="button" class="flex items-center w-full p-2 text-base font-normal  text-black transition duration-75 rounded-lg group hover:bg-gray-500 dark:text-white dark:hover:bg-gray-700" >
       {/* <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  */}
             <span class="flex-1 ml-3 text-left font-bold text-black whitespace-nowrap" sidebar-toggle-item>{Name}</span>
             <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
              
              </button>:<button  onClick={()=>{fun1();fun2({Name})}} type="button" class="flex items-center w-full p-2 text-base font-normal text-black transition duration-75 rounded-lg group hover:bg-gray-500 dark:text-white dark:hover:bg-gray-700" >
             <span class="flex-1 ml-3 font-bold text-black text-left whitespace-nowrap" sidebar-toggle-item>{Name}</span>
             <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
             
             </button>
}


        { show&& <h1 className=' items-center w-full p-2 text-base font-normal text-black transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700 pl-11'>{ele.map((e)=>{return <h1 className='items-center w-full p-2 text-base font-normal text-black font-semibold transition duration-75 rounded-lg group hover:bg-gray-600 dark:text-white dark:hover:bg-gray-500 pl-11'>{e}</h1> } ) }</h1>}
        

    </div>
  )
}

export default NewComp