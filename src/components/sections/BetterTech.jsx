import React from "react";
import TechCard from "../common/TechCard";
import { techCards } from "../../utils/helper";

const BetterTech = () => {
  return (
    <>
      <div className="w-full m-auto bg-ternary px-4 lg:px-0">
        <div className="max-w-302 m-auto w-full">
          <h2 className="text-primary font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center pt-10 lg:pt-15">
            Better Tech. Better Team. Better Lending
          </h2>
          <div className="mt-10 pb-10 lg:pb-15 gap-7.25  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center justify-center">
            {techCards.map((item, index) => (
              <TechCard key={index} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BetterTech;
