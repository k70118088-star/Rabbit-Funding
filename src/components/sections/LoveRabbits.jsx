import React from "react";
import Button from "../common/Button";

const LoveRabbits = () => {
  return (
    <div className="w-full bg-[linear-gradient(to_bottom,#fbfdfb_0%,#fbfdfb_70%,#f5f5f5_71%,#f5f5f5_100%)] px-4">
      <div className="rounded-3xl max-w-285 m-auto bg-gradient-to-b from-[#7AC943] to-[#4CAF50] flex flex-col items-center justify-center py-10 sm:py-12 lg:py-15 px-4">
        <h3 className="max-w-189.5 text-center font-bold text-white text-2xl sm:text-3xl lg:text-[32px] leading-[120%]">
          Love what Rabbit Did for You! <br />
          Share your story and help others discover human-first funding.
        </h3>

        <Button
          text={"Submit Your Testimonial"}
          className={
            "bg-[#010101]/24 mt-6 lg:mt-8 rounded-[200px] text-white py-4 lg:py-5 px-6 lg:px-8 font-semibold text-sm lg:text-base leading-[100%] flex items-center hover:transition-all hover:ease-in-out hover:duration-900 transform  hover:bg-white hover:text-primary"
          }
          icon={"arrow"}
        />
      </div>
    </div>
  );
};

export default LoveRabbits;
