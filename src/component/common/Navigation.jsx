import React from 'react'
import { NAV_LINKS_DATA_LIST } from '../../utlis/helper'
import { useLocation } from 'react-router-dom'


const Navigation = () => {
  const {pathname} = useLocation();
  const navBgColor = () => {
    if (pathname==="/" ) return "bg-red-500"
    return "bg-gray-500"
  }

  return (
    <div className=''>
      <div className={`max-w-[1320px] px-5 mx-auto  rounded-lg py-4 ${navBgColor()}`}>
       <div className='flex items-center justify-between'>
         <a href="#"> <img width="128" height="60" src="/public/assets/images/svg/logo.svg" alt="logo" /></a>
         <ul className='flex items-center gap-5'>
          {NAV_LINKS_DATA_LIST.map((obj,i) => (
            <div key={i} >
              <a href={obj.url}><li>{obj.title}</li></a>
            </div>
          ))}
          <li><button className='border-black border text-2xl p-3 cursor-pointer rounded-lg'>submit</button></li>
         </ul>
         
               </div>
       </div>
    </div>
  )
}

export default Navigation