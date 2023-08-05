import { useState } from "react";

export default function header() {
  let [show,setShow] = useState(true)
/*   let [cities,setCities] = useState(true) */

  return (
    <div className='flex border-b-2 pb-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-2 w-6 h-6 cursor-pointer hover:translate-y-1 duration-100" onClick={()=>setShow(!show)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div className="text-left pt-1 font-ultrabold text-xl col px-md-2">My Tinerary</div>
      {show ? (
        <>
      <div className='flex justify-items-end transition-all duration-500 -left-36'>
      <div className="align-middle pt-1 font-bold text-l col mx-2">Home</div>
      <div className="align-middle pt-1 font-bold text-l col mx-2 cursor-pointer" onClick={()=>setCities(!cities)}>Cities</div>
      <div className="flex px-2 ms-1 items-center font-medium text-center text-white hover:text-black font-bold rounded-lg bg-indigo-600 hover:bg-[#5a4b03] hover:invert cursor-pointer hover:translate-y-1 duration-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="me-1 w-3 h-3 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        Login
      </div>
    </div>
      </>
      ) : (null)}
      {/* {cities ? (
        <>
        <div className="">
          <figure className="flex flex-col">
          <img src="./public/img/uc.gif" alt="" />
          </figure>
          </div>
        </>
      ): (null)} */}
    </div>
)
}