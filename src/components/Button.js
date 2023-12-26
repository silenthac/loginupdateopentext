import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex justify-between w-full'>
        <span class="flex-1 ml-3 text-left text-black font-bold whitespace-nowrap" sidebar-toggle-item>{name}</span>
             <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
    </div>
  )
}

export default Button;