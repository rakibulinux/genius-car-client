import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import BannerItem from "./BannerItem";

const Banner = () => {
  const bannerData = [
    {
      image: img1,
      previous: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      previous: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      previous: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      previous: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      previous: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      previous: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full rounded-[10px]">
      {bannerData.map((banner) => (
        <BannerItem key={banner.id} banner={banner} />
      ))}
      {/* <div id="slide1" className="carousel-item  relative w-full">
        <img src={img1} className="w-full" alt="img" />
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
        <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 top-3/4">
          <button className="btn btn-error mr-2">Discover More</button>
          <button className="btn btn-outline btn-accent">Latest Project</button>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a
            href="#slide4"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item rounded-lg relative w-full">
        <img src={img2} className="w-full" alt="img" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a
            href="#slide1"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item rounded-lg relative w-full">
        <img src={img3} className="w-full" alt="img" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a
            href="#slide2"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item rounded-lg relative w-full">
        <img src={img4} className="w-full" alt="img" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a
            href="#slide3"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide6"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item rounded-lg relative w-full">
        <img src={img5} className="w-full" alt="img" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a
            href="#slide1"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item rounded-lg relative w-full">
        <img src={img6} className="w-full" alt="img" />
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a
            href="#slide2"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide5"
            className="btn btn-circle bg-orange-750 hover:bg-orange-750 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
