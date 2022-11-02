import React, { useEffect, useState } from "react";
import ServicesItem from "./ServicesItem";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-7 ">
      <div className="text-center my-7">
        <h2 className="text-2xl font-bold text-orange-750">Services</h2>
        <h1 className="text-5xl font-semibold">Our Service Area</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServicesItem key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="btn text-orange-750 font-semibold text-xl hover:badge-outline badge-outline hover:text-orange-750">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
