import React from "react";
import Button from "./common/Button";

const Hero = () => {
  return (
    <div className="max-w-360 m-auto w-full mt-10 mb-22.5 ">
      <div className="px-4 lg:px-2 max-w-300 m-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-0 gap-10  w-full">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-[36px] sm:text-[44px] lg:text-[52px] leading-[120%] text-[#2B2B2B] max-w-122.5">
            Built by People. Backed by Tech.
          </h1>

          <p className="max-w-122.5 mt-4 font-normal text-base leading-[150%] text-[#4E4E4E]">
            We’re not a software company pretending to care.
            <br className="hidden lg:block" /> We’re real underwriters — with real decision-making power —
            using tech to move faster, not think for us.
          </p>

          <Button
            text={"Join the   Success "}
            className={
              "hover:bg-white hover:border hover:border-[#2B2B2B] hover:text-[#2B2B2B] mt-8 py-5 px-8 rounded-[200px] bg-[#7AC943] font-semibold text-base leading-[100%] text-white flex items-center gap-1.5 mx-auto lg:mx-0"
            }
            icon={"arrow"}
          />
        </div>

        <div className="w-full lg:w-auto min-[1360px]:translate-x-16 flex justify-center">
          <img
            src="/assets/Hero.webp"
            alt="Hero"
            className="w-full max-w-148 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
