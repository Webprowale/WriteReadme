import React from "react";
import ImageAi from "../assets/robot-blank.png";

function Hero() {
  return (
    <div className="w-full bg-[rgb(95,11,187)]  pt-24 flex  flex-col-reverse md:flex-row md:justify-center  lg:rounded-3xl font-[Kanit]">
      <div className="flex flex-col text-left  md:w-1/2 lg:w-1/2  lg:pt-20">
        <h3 className="font-bold text-[4em] md:text-[5em] mb-4 md:ms-6 text-white ms-4  lg:ms-28 ">
          AI CRAFT MAGIC.
        </h3>
        <p className=" mb-10 text-white md:w-3/4  md:ms-8 text-sm ms-4 lg:ms-28 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quae autem, error voluptate quam facere a quidem sed,
           voluptatibus harum error voluptate qua
        </p>
        <div className="action flex flex-col md:flex-row gap-2 md:ms-8 lg:ms-28 ">
          <button className="bg-white rounded-3xl px-4 py-2 font-medium mb-2 md:mb-0 md:w-[40%] outline-0">
            TRY IT'S FREE
          </button>
          <button className="text-white rounded-3xl px-4 py-2 font-medium border-2 border-[#bbaf0b] md:w-[40%] outline-0">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="md:w-1/2 lg:h-1/2">
        <img src={ImageAi} alt="" className="w-full " />
      </div>
    </div>
  );
}

export default Hero;
