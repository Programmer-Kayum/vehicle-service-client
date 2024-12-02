import { Link } from "react-router-dom";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full my-2 relative">
      {[
        {
          id: "slide1",
          img: img1,
          title: "Welcome to Vehicle Services",
          desc: "Get the best deals and expert services for your vehicles, all in one place.",
        },
        {
          id: "slide2",
          img: img2,
          title: "Expert Vehicle Maintenance",
          desc: "Professional and reliable vehicle maintenance services to keep you moving.",
        },
        {
          id: "slide3",
          img: img3,
          title: "Reliable Repairs",
          desc: "Quick and reliable repair services for your cars and bikes.",
        },
        {
          id: "slide4",
          img: img4,
          title: "Quality Parts & Accessories",
          desc: "Shop from our range of high-quality parts and accessories for your vehicles.",
        },
        {
          id: "slide5",
          img: img5,
          title: "Modern Vehicle Services",
          desc: "Experience modern, tech-driven solutions for your vehicles.",
        },
        {
          id: "slide6",
          img: img6,
          title: "Customer Satisfaction Guaranteed",
          desc: "We ensure top-notch service for all your vehicle needs.",
        },
      ].map((slide, index) => (
        <div
          id={slide.id}
          key={slide.id}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-[350px] lg:h-[500px]  rounded-lg"
          />
          <div className="absolute lg:left-10 lg:top-2/4 top-[60px] text-left lg:bg-white/70 mt-8 mx-3 bg-white/60 lg:p-6 p-3 rounded-lg">
            <h1 className="text-3xl lg:text-5xl font-bold text-black lg:mb-4">
              {slide.title}
            </h1>
            <p className="text-yellow-800 text-lg lg:text-xl lg:mb-6">
              {slide.desc}
            </p>
            <div className="space-x-4">
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-6">
                Learn More
              </button>
              <Link to={"/contact"}>
                <button className="btn bg-green-500 hover:bg-green-600 text-white px-6">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute left-5 right-5 bottom-0 gap-3  flex -translate-y-1/2 transform justify-end">
            <a
              href={`#slide${((index - 1 + 6) % 6) + 1}`}
              className="lg:btn lg:btn-circle btn btn-sm lg:bg-orange-500 bg-orange-600"
            >
              ❮
            </a>
            <a
              href={`#slide${((index + 1) % 6) + 1}`}
              className="lg:btn lg:btn-circle btn  btn-sm lg:bg-orange-500 bg-orange-600"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
