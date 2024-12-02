import React from "react";
import img1 from "../../assets/images/products/1.png";
import img2 from "../../assets/images/products/2.png";
import img3 from "../../assets/images/products/3.png";
import img4 from "../../assets/images/products/4.png";
import img5 from "../../assets/images/products/5.png";
import img6 from "../../assets/images/products/6.png";
const products = [
  { title: "Car Engine Plug", price: "$20.00", img: img1, rating: 5 },
  { title: "Car Air Filter", price: "$20.00", img: img2, rating: 4 },
  { title: "Cools Led Light", price: "$20.00", img: img3, rating: 3 },
  { title: "Cools Led Light", price: "$20.00", img: img4, rating: 5 },
  { title: "Cools Led Light", price: "$20.00", img: img5, rating: 4 },
  { title: "Cools Led Light", price: "$20.00", img: img6, rating: 5 },
];

const BrowseProducts = () => {
  // Helper function to generate star icons based on rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto my-12 px-6">
      <h3 className="text-red-500 text-center text-lg">Popular Products</h3>
      <h2 className="text-center text-4xl font-bold">Browse Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <div className="flex justify-center mt-2">
              {renderStars(product.rating)}
            </div>
            <h3 className="text-xl font-semibold text-center">
              {product.title}
            </h3>
            <p className="text-center text-red-500 font-bold">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
          More Products
        </button>
      </div>
    </div>
  );
};

export default BrowseProducts;
