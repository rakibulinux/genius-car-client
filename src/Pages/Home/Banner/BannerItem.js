import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./BannerItem.css";
const BannerItem = ({ banner }) => {
  const { id, next, previous, image } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item  relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" alt="img" />
      </div>
      <div className="absolute flex justify-end  transform -translate-y-1/2 left-24 gap-5 top-1/4">
        <h1 className="text-white font-bold text-6xl">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 top-1/2">
        <p className="text-white font-bold w-1/2 text-1xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 bottom-60">
        <button className="btn font-semibold border-none mr-2 text-white bg-orange-750">
          Discover More
        </button>
        <button className="btn btn-outline text-white font-semibold">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
        <a
          href={`#slide${previous}`}
          className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
        >
          <FaArrowLeft />
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
        >
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
