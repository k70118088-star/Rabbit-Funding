import React from "react";

const BehindRabbit = () => {
  return (
    <div className="max-w-285 m-auto my-16 lg:my-42.5 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 w-full">
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src="/assets/behindrabbit.webp"
            alt=""
            className="w-full max-w-125 lg:max-w-none h-auto"
          />
        </div>
        <div className="mt-0 lg:mt-10 text-center lg:text-left">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-primary max-w-124">
            Who’s Behind Rabbit?
          </h2>
          <p className="font-normal text-base text-secondary leading-normal max-w-124 mt-3">
            Our team isn’t just from finance. We’re ex-operators, former
            founders, and recovering bankers who got tired of saying "no" when
            we knew there was a better way to fund.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BehindRabbit;
