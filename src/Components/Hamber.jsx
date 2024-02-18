import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faBars} from "@fortawesome/free-solid-svg-icons"
function Hamber() {
  const [bnn, setBann] = useState('translate-x-[1001%]')
  const show = ()=>{
    setBann('translate-x-[0]')
  }
  const cancel =()=>{
    setBann('translate-x-[1001%]')
  }
  return (
    <>
    {/* MOBILE */}
      <div className=" lg:hidden flex justify-around p-0 min-w-full">
        <div className="brand-logo font-bold text-3xl text-[#f7f3fc]">
          <h4>PredaitorAi</h4>
        </div>
        <div className="menu">
          <FontAwesomeIcon icon={faBars} size="2xl" color="white" onClick={show}/>
        </div>
      </div>
    <div className={`absolute top-0 right-0  w-1/2 transform ${bnn}  duration-300 ease-in bg-[#5f0bbb] w-56 h-1/2 rounded-xl   border-s-2 shadow-lg outline-0 border-[#bbaf0b]`}>
            <div className="flex-col gap-28 px-2 text-center">
            <FontAwesomeIcon icon={faXmark} size='2xl' className='mt-4 mb-[40px] relative -left-[80px] ' color='white'  onClick={cancel}/>
              <li className="text-md font-semibold text-[#f7f3fc] mb-4 ">Home</li>
              <li className="text-md font-semibold text-[#f7f3fc] mb-4 ">About</li>
              <li className="text-md font-semibold text-[#f7f3fc] mb-4 ">Service</li>
              <button className="bg-[#f7f3fc] px-7 py-2 text-3 text-[#5f0bbb] rounded-full shadow-2xl font-semibold me-0  mb-4 w-full">
          SIGN UP
        </button>
            </div>
          </div>
          </>
  )
}

export default Hamber