import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-black w-4/5 mx-auto text-white rounded-lg py-8">
      <div className="container  mx-auto lg:py-10 px-8">
        <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
          {/* Opening Hours */}
          <div className="flex items-center space-x-4">
            <FaClock className="text-red-500 text-3xl" />
            <div>
              <p className="text-gray-300 text-sm">We are open Monday-Friday</p>
              <h4 className="text-xl font-bold">7:00 am - 9:00 pm</h4>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-red-500 text-3xl" />
            <div>
              <p className="text-gray-300 text-sm">Have a question?</p>
              <h4 className="text-xl font-bold">01890275600</h4>
            </div>
          </div>

          {/* Address Info */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <div>
              <p className="text-gray-300 text-sm">
                Need a repair? Our address
              </p>
              <h4 className="text-xl font-bold">HSTU Street, Dinajpur</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
