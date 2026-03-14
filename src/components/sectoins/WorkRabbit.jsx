import React from "react";
import Button from "../common/Button";

const WorkRabbit = () => {
  return (
    <div className="w-full py-16 md:py-20 lg:py-25 px-4 bg-linear-to-b from-[rgba(76,175,80,0.1)] to-[rgba(76,175,80,0)]">
      <div className="max-w-[743.29px] relative w-full flex flex-col items-center justify-center m-auto min-h-[350px] md:min-h-[420px] lg:h-118.25">
        
        <div className=" absolute inset-0 bg-[url('/assets/Subtract.png')] bg-no-repeat bg-[100%_100%]! opacity-5"></div>

        <div className="relative flex flex-col items-center text-center">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-custom-5xl leading-[120%] text-primary">
            Worked With Rabbit
          </h2>

          <p className="font-normal text-base sm:text-lg text-secondary leading-[150%] max-w-[90%] sm:max-w-132 mt-3">
            We love hearing success stories. Submit your testimonial and help
            others fund their story.
          </p>
          <Button
            text={"Share Yours"}
            icon={"arrow"}
            className="hover:bg-transparent hover:transition-all hover:ease-in-out hover:duration-500 border border-transparent hover:border-primary hover:text-primary mt-6 md:mt-8 py-3 px-6 md:py-5 md:px-[31.5px] rounded-[200px] bg-green font-semibold text-sm md:text-base leading-[100%] text-white flex items-center gap-1.5 mx-auto lg:mx-0"
          />
        </div>

      </div>
    </div>
  );
};

export default WorkRabbit;