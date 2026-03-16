import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ text, img, name, role , height , width }) => {
  return (
    <div className={`${width} flex-col ${height} flex justify-between w-full bg-white shadow-[0px_4px_54px_0px_#0000000D] rounded-3xl p-6 `}>
        <div>
      <div className="flex gap-1 text-[#FBBF24]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="mt-4 text-base font-normal leading-[150%] text-secondary">
        {text}
      </p>
       </div>
      <div className="border-t border-primary/10  pt-4 flex items-center gap-3">

        <img
          src={img}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <h4 className="text-base leading-[100%] font-semibold text-primary">
            {name}
          </h4>
          <p className="text-sm font-normal leading-[150%] text-primary">
            {role}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Review;
