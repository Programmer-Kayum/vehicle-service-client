import { useLoaderData } from "react-router-dom";
import checkOut from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const CheckOut = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);
  // const { email } = user;

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const phone = form.number.value;
    const date = form.date.value;
    const message = form.message.value;
    const order = {
      name,
      email,
      phone,
      message,
      title,
      date,
      price,
      service_id: _id,
      img,
    };
    // console.log(order);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Inside post response", data);
        if (data.insertedId) {
          alert("User added successfully");
          // form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="relative">
        <img
          src={checkOut} // Replace with your actual image URL
          alt="Checkout Banner"
          className="w-full h-64 rounded-lg object-cover"
        />
      </div>

      {/* Breadcrumb */}
      <div className="bg-white lg:my-4 shadow-md">
        <div className="py-1">
          <div className=" inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white py-1 lg:text-3xl text-xl font-bold">
              Your Order :
              <span className="text-orange-500 ml-2  lg:px-4 font-bold ">
                {title}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto lg:px-4 lg:py-10">
        <div className="bg-white shadow-md rounded-md p-6">
          <form onSubmit={handleCheckOut} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
              <input
                type="text"
                defaultValue={title}
                placeholder="Ordered Products"
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                name="number"
                placeholder="Your Phone"
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
              />

              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
              />

              <input
                className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
                type="date"
                name="date"
                id=""
              />
            </div>
            <textarea
              placeholder="Your Message"
              type="text"
              name="message"
              rows="5"
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-red-400 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white text-lg font-medium py-3 rounded-md hover:bg-red-600 transition"
            >
              Order Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
