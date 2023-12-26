import React from 'react'
import logo from '../images/logo1.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './Temp.css'


const profileData = [
  'Profile',
  'Settings', 
  
]

const Temp = () => {
  const [islogout, setlogout] = useState(false);
  const navigate = useNavigate();

  if (islogout) {
    navigate('/');
  }

  return (
    <>
      <div className='mainDropdown'>
        <img className = 'imgDropdown' src={logo} />
        <div className='dropdown'>
          <ul className='dropdown-content'>
            {
              profileData.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" style={{ borderBottom: "1px solid #dcdcdc" }}>{item}</a>
                  </li>
                )
              })
            }
            <li>
              <a onClick={() => { setlogout(true) }} href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" tyle={{ borderBottom: "1px solid #dcdcdc" }}>Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </>)
}


export default Temp