import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div>
      <div className="card bg-white shadow-md rounded-lg p-4">
        <img
          src={service.img}
          alt={service.title}
          className="rounded-lg mb-4 h-[250px] w-full"
        />
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="text-red-500 font-semibold mt-2">
          Price: {service.price}
        </p>
        <div className="mt-4 flex justify-end">
          <Link to={`/details/${service._id}`}>
            <span className="text-red-500 hover:bg-orange-500 hover:text-white btn btn-sm font-bold text-xl">
              →Book Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
