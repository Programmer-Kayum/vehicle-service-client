import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-12 px-2 ">
      <div className="flex flex-col gap-5 lg:flex-row items-center">
        {/* Left Column - Images */}
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={person}
            alt="Service"
            className="rounded-lg w-4/5 object-cover shadow-lg"
          />
          <img
            src={parts}
            alt="Qualified Team"
            className="absolute left-1/2 top-3/4 w-2/4   object-cover rounded-lg border-4 border-white shadow-md -translate-y-1/2"
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full lg:w-1/2 lg:px-8 text-center lg:text-left">
          <h3 className="text-xl font-semibold text-blue-500 uppercase">
            About Us
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold my-4">
            We are qualified & experienced in this field
          </h2>
          <p className="text-gray-700 text-lg px-3 mb-6">
            At Vehicle Services, we provide top-notch vehicle maintenance,
            repair, and part replacement services. Our team of professionals
            ensures that your vehicle is in the best hands, offering efficient,
            reliable, and customer-focused solutions tailored to your needs.
          </p>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
