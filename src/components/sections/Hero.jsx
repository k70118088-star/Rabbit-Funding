import React from "react";
import Button from "../common/Button";
import Navbar from "../common/Navbar";


const Hero = () => {
  return (
    <div className="bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)] w-full  pb-22.5 ">
      <Navbar />
      <div className="px-4  max-w-300 m-auto flex flex-col lg:flex-row items-center justify-between pt-10 lg:gap-0 gap-10  w-full">
        <div className="text-center lg:text-left">
          <h1 className="lg:mt-10 mt-0 font-bold text-[36px] sm:text-[44px] lg:text-custom-5xl leading-[120%] text-primary max-w-122.5">
            Built by People. Backed by Tech.
          </h1>

          <p className="max-w-122.5 mt-4 font-normal text-base leading-[150%] text-secondary">
            We’re not a software company pretending to care.
            <br className="hidden lg:block" /> We’re real underwriters — with real decision-making power —
            using tech to move faster, not think for us.
          </p>

          <Button
            text={"Join the Success "}
            className={
              "hover:bg-transparent hover:transition-all hover:ease-in-out hover:duration-500 border border-transparent hover:border-primary hover:text-primary mt-8 py-3 px-6  md:py-[17.5px]  md:px-[31.5px] rounded-[200px] bg-green font-semibold text-sm md:text-base leading-[100%] text-white flex items-center gap-1.5 mx-auto lg:mx-0"
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
