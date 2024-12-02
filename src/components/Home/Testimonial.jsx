import img1 from "../../assets/images/testimonial/2.jpg";
import img2 from "../../assets/images/testimonial/4.jpg";

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-red-500 font-semibold uppercase mb-2">
          Testimonial
        </h3>
        <h2 className="text-3xl font-bold mb-4">What Customer Says</h2>
        <p className="text-gray-600 mb-8">
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised Words Which Don't Look Even Slightly Believable.
        </p>
        <div className="flex justify-center items-center gap-8">
          {/* Left Arrow */}
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 shadow-lg">
            <span>&larr;</span>
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
              <div className="flex items-center mb-4">
                <img
                  src={img1}
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Awlad Hossain</h4>
                  <p className="text-sm text-gray-500">Businessman</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                There Are Many Variations Of Passages Of Lorem Ipsum Available,
                But The Majority Have Suffered Alteration.
              </p>
              <div className="text-yellow-500 text-sm flex">★★★★★</div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
              <div className="flex items-center mb-4">
                <img
                  src={img2}
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Awlad Hossain</h4>
                  <p className="text-sm text-gray-500">Businessman</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                There Are Many Variations Of Passages Of Lorem Ipsum Available,
                But The Majority Have Suffered Alteration.
              </p>
              <div className="text-yellow-500 text-sm flex">★★★★★</div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 shadow-lg">
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
