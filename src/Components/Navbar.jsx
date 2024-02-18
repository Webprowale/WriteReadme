import React from "react";
import Hamber from "./Hamber";

function Navbar() {
  const show = ()=>{
    setBann('translate-x-[0]')
  }
  return (
    <div className="w-full  bg-[#5f0bbb]  py-8 rounded-full shadow-2xl mb-10">
      <div className=" hidden lg:flex items-center justify-around">
        <div className="flex items-center gap-3 px-2">
          <li className="text-md font-semibold text-[#f7f3fc]">Home</li>
          <li className="text-md font-semibold text-[#f7f3fc]">About</li>
          <li className="text-md font-semibold text-[#f7f3fc]">Service</li>
        </div>
        <div className="brand-logo font-bold text-3xl text-[#f7f3fc]">
          <h4>PredaitorAi</h4>
        </div>
        <button className="bg-[#f7f3fc] px-7 py-2 text-3 text-[#5f0bbb] rounded-full shadow-2xl font-semibold me-0">
          SIGN UP
        </button>
      </div>
<Hamber />
      
      
     
    </div>
  );
}

export default Navbar;
