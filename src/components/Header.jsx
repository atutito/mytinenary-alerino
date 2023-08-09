import { useState } from "react";
import {Link as Anchor} from 'react-router-dom' 

export default function header() {
  let [show,setShow] = useState(true)

  return (
    <div className='flex flex-col md:flex-row lg:flex md:justify-between border-b-2 pb-2'>
      <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 w-6 h-6 cursor-pointer hover:translate-y-1 duration-100" onClick={()=>setShow(!show)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <img src="./img/logo.png" className='mt-2 ms-2 w-6 h-6'alt="logo" />
      <div className="text-[20rm] flex text-left pt-1 font-ultrabold sm:text-xl col px-md-2">My Tinerary</div>
      </div>
      {show ? (
        <>
      <div className='flex flex-col md:flex-row ms-5 top-10 left-2 self-start align-middle'>
      <Anchor to={'/Home'} className="align-middle pt-1 font-bold text-l col mx-2 cursor-pointer">Home</Anchor>
      <Anchor to={'/Cities'} className="align-middle pt-1 font-bold text-l col mx-2 cursor-pointer" onClick={()=>setCities(!cities)}>Cities</Anchor>
      <Anchor to={'/Cities'}>
      <div className="flex px-2 py-0.5 align-middle font-medium text-center text-white hover:text-black font-bold rounded-lg bg-indigo-600 hover:bg-[#5a4b03] hover:invert cursor-pointer hover:translate-y-1 duration-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="mt-1.5 me-1 w-3 h-3 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        Login
        <img src="./img/user.png" className='ms-2 w-6 h-6 self-center mb-0.5'alt="logo" />
      </div>
      </Anchor>
    </div>
      </>
      ) : (null)}
    </div> 
)
}
