import React from "react";
import Review from "../common/Review";
import { reviews } from "../../utils/Helper";

const RealPeople = () => {
  return (
    <div className="max-w-293 m-auto mb-20 lg:mb-42.5 px-4 ">
      <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-[120%] text-primary text-center">
        Real People. Real Results.
      </h3>

      <div className="mt-10 lg:mt-15 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center lg:justify-items-stretch">
        {reviews.map((review, index) => (
          <Review
            key={index}
            text={review.text}
            name={review.name}
            role={review.role}
            img={review.img}
          />
        ))}
      </div>
    </div>
  );
};

export default RealPeople;