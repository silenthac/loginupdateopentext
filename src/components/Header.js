import React, { useState } from 'react'
import Temp from './Temp';

const Header = () => {
   
  return (
    <div className='bg-transparent'>
         <div className='' style={{background:"linear-gradient(45deg, rgb(9, 14, 44) 0%, rgb(18, 44, 105) 58.93%, rgb(7, 141, 179) 100%)"}}>    
      <div className='flex justify-between '>
      <p className=' flex justify-center items-center   pl-5  text-white text-md font-bold'><b>Opentext</b><sup>TM </sup>&nbsp;|&nbsp;Archive Center{" "}{" "}<sub>CE 23.1</sub></p>
      <div className='flex  justify-evenly'>
        {/* QUESTION MARK */}
      <svg  className='pt-4 pr-5 pb-5 flex items-center justify-center' xmlns="http://www.w3.org/2000/svg" height="70px" width="70px" viewBox="0 0 512 512"><path d="M504 256c0 137-111 248-248 248S8 393 8 256C8 119.1 119 8 256 8s248 111.1 248 248zM262.7 90c-54.5 0-89.3 23-116.5 63.8-3.5 5.3-2.4 12.4 2.7 16.3l34.7 26.3c5.2 3.9 12.6 3 16.7-2.1 17.9-22.7 30.1-35.8 57.3-35.8 20.4 0 45.7 13.1 45.7 33 0 15-12.4 22.7-32.5 34C247.1 238.5 216 254.9 216 296v4c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-1.3c0-28.5 83.2-29.6 83.2-106.7 0-58-60.2-102-116.5-102zM256 338c-25.4 0-46 20.6-46 46 0 25.4 20.6 46 46 46s46-20.6 46-46c0-25.4-20.6-46-46-46z"/></svg>
      
{ <Temp/> }





</div>



 
 </div>



</div>

    </div>
  )
}

export default Header