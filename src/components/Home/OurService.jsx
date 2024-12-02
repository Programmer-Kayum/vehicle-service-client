import { useEffect, useState } from "react";
import Service from "./Service";

const OurServices = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto my-12 px-6 ">
      <div className="text-center mb-12">
        <h3 className="text-red-500 uppercase text-lg font-medium tracking-wide">
          Service
        </h3>
        <h2 className="text-4xl font-bold leading-tight my-2">
          Our Service Area
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which don’t look even slightly believable.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>

      {/* More Services Button */}
      <div className="text-center mt-8">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md">
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurServices;
