import check from "../../assets/icons/check.svg";
import deliveryt from "../../assets/icons/deliveryt.svg";
import group from "../../assets/icons/group.svg";
import person from "../../assets/icons/person.svg";
import quote from "../../assets/icons/quote.svg";
import Wrench from "../../assets/icons/Wrench.svg";

const services = [
  {
    title: "100% Guranty",
    img: check,
  },
  {
    title: "Timely Delivery",
    img: deliveryt,
  },

  {
    title: "Expert Team",
    img: group,
  },
  {
    title: "24/7 Support",
    img: person,
  },
  {
    title: "quotetion",
    img: quote,
  },
  {
    title: "Auto Car Repair",
    img: Wrench,
  },
];

const Features = () => {
  return (
    <div className="container mx-auto my-12 lg:px-6 px-3 ">
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
      <div className="grid lg:grid-cols-6 grid-cols-3 lg:w-3/4 mx-auto gap-2 lg:h-[100px]">
        {services.map((service, index) => (
          <div key={index} className="card  bg-white shadow-lg rounded-lg px-4">
            <img
              src={service.img}
              alt={service.title}
              className="rounded-lg mb-4 h-[50px] w-[50px]"
            />
            <h3 className="font-bold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
