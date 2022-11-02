import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServicesItem = ({ service }) => {
  const { img, price, title } = service;
  console.log(service);
  return (
    <div className="card card-compact w-[364px] bg-base-100 h-80 shadow-xl">
      <figure>
        <img className="h-[208px] rounded-2xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-150 text-2xl">{title}</h2>
        <div className="flex items-center card-actions justify-between text-orange-750">
          <p className="text-xl font-semibold">
            $<span>{price}</span>
          </p>
          <button className="text-orange-750">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
