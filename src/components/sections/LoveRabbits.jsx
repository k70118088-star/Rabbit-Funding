import React from "react";
import Button from "../common/Button";

const LoveRabbits = () => {
  return (
    <div className="w-full bg-[linear-gradient(to_bottom,#fefefe_0%,#fefefe_65%,#f5f5f5_66%,#f5f5f5_100%)] px-4 py-10">
      <div className="relative max-w-285 w-full mx-auto rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/assets/bg.webp')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 py-10 sm:py-12 lg:py-16">
          <h3 className="max-w-190 font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-tight">
            Love what Rabbit Did for You!{" "}
            <br className="hidden sm:block" />
            Share your story and help others discover human-first funding.
          </h3>
          <Button
            text={"Submit Your Testimonial"}
            className="mt-6 lg:mt-8 bg-black/30 hover:bg-white hover:text-black transition-all duration-300 rounded-full text-white py-3 sm:py-4 px-6 sm:px-8 font-semibold text-sm sm:text-base flex items-center gap-2 backdrop-blur-md"
            icon={"arrow"}/>
        </div>
      </div>
    </div>
  );
};

export default LoveRabbits;
