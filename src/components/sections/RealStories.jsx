import React from "react";
import Review from "../common/Review";
import { smallReviews } from "../../utils/helper";

const RealStories = () => {
  return (
    <div className="max-w-285 m-auto w-full py-20 lg:py-42.5 px-4 lg:px-0">
      <div className="max-w-181 m-auto">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-custom-5xl text-primary leading-[120%] text-center lg:text-left">
          Real Stories. Real Funding.
        </h2>

        <p className="m-auto font-normal text-base leading-[150%] text-secondary max-w-147.5 text-center mt-3">
          We’ve helped small businesses from all industries get approved and
          grow fast. Here’s what they had to say:
        </p>
      </div>

      <div className="flex w-full flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap mt-10 lg:mt-15 gap-6 items-center justify-center">
        {smallReviews.map((review, index) => (
          <Review
            key={index}
            height={review.height}
            width={review.width}
            text={review.text}
            img={review.img}
            name={review.name}
            role={review.role}
          />
        ))}
      </div>
    </div>
  );
};

export default RealStories;
