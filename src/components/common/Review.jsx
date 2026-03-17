import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ text, img, name, role , height , width }) => {
  return (
    <div className={`${width} flex-col ${height} flex justify-between w-full bg-white shadow-custom rounded-3xl p-6 `}>
        <div>
      <div className="flex gap-1 text-golden">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="mt-4 text-sm sm:text-base font-normal leading-normal text-secondary">
        {text}
      </p>
       </div>
      <div className="border-t border-primary/10  pt-4 flex items-center gap-3">
        <img src={img} alt={name} className="w-12.5 h-12.5 rounded-full object-cover"/>
        <div>
          <h4 className="text-base leading-none font-semibold text-primary">
            {name}
          </h4>
          <p className="text-sm font-normal leading-normal text-primary">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
