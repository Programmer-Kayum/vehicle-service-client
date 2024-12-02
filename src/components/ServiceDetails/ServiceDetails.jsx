import { Link, useLoaderData } from "react-router-dom";
import checkOut from "../../assets/images/checkout/checkout.png";
import logo from "../../assets/logo.svg";
import Facility from "./Facility";

const ServiceDetails = () => {
  const { _id, title, img, description, facility, price } = useLoaderData();

  return (
    <div>
      <div className=" mx-2 bg-gray-100">
        {/* Header Section */}
        <div className="relative">
          <img
            src={checkOut} // Replace with your actual image URL
            alt="Checkout Banner"
            className="w-full h-64 rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-4 mx-2 gap-3 lg:my-12 my-3">
        <div className="lg:col-span-3">
          <img className="w-full h-[300px] rounded-lg" src={img} alt="" />

          <div className=" inset-0 bg-black my-2 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white py-1 text-3xl font-bold">
              <span className="text-orange-500  px-4 font-bold ">{title}</span>
            </h1>
          </div>
          <div>
            <p className="px-2">{description}</p>
          </div>

          {/* facility */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-5 gap-2">
            {facility.map((service) => (
              <Facility key={service.index} service={service}></Facility>
            ))}
          </div>
          <div>
            <h3 className="lg:text-3xl text-xl pb-3 text-center font-bold">
              3 Simple Steps to Process
            </h3>
            <div className="bg-gray-100 py-10">
              <div className="container mx-auto px-4">
                {/* Steps Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  {["Step One", "Step Two", "Step Three"].map((step, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-md shadow-md p-6 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-100 text-red-500 font-bold text-lg">
                        {`0${index + 1}`}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {step.toUpperCase()}
                      </h3>
                      <p className="text-gray-600">
                        It uses a dictionary of over 200.
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="container mx-auto px-4 py-8">
                    <div>
                      <iframe
                        className="w-full h-64 sm:h-96"
                        // className="rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="max-w-md mx-auto p-4 space-y-6">
              {/* Services Section */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Services</h2>
                <ul className="space-y-4">
                  {[
                    { title: "Full Car Repair", active: true },
                    { title: "Engine Repair" },
                    { title: "Automatic Services" },
                    { title: "Engine Oil Change" },
                    { title: "Battery Charge" },
                  ].map((service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`flex justify-between items-center py-3 px-4 rounded-lg shadow ${
                          service.active
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-white hover:bg-gray-200"
                        }`}
                      >
                        {service.title}
                        <span className="material-icons">---></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Section */}
              <div className="bg-black p-6 rounded-lg shadow-md text-white">
                <h2 className="text-lg font-semibold mb-4">Download</h2>
                <ul className="space-y-4">
                  {[
                    { title: "Our Brochure", link: "#" },
                    { title: "Company Details", link: "#" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="flex justify-between items-center bg-white text-black py-3 px-4 rounded-lg shadow hover:bg-gray-200"
                      >
                        <span>{item.title}</span>
                        <span className="material-icons text-red-500">
                          --->
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="max-w-sm mx-auto p-4 space-y-6">
                {/* Car Doctor Section */}
                <div className="bg-black text-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    {/* Replace this with an actual icon if available */}
                    <img src={logo} alt="" />
                  </div>

                  <p className="mt-2 text-sm">
                    Need Help? We Are Here To Help You
                  </p>

                  <div className="bg-white text-black p-4 rounded-lg mt-4">
                    <p className="font-bold">Car Doctor Special</p>
                    <p className="text-red-500 text-sm">Save up to 60% off</p>
                    <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
                      Get A Quote
                    </button>
                  </div>
                </div>

                {/* Price Section */}
                <div className="text-center">
                  <p className="text-3xl font-bold">Price : $ {price}</p>
                  <Link to={`/checkOut/${_id}`}>
                    <button className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600">
                      Proceed Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
