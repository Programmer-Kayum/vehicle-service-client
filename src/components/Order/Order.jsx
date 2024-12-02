import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrderList from "./OrderList";
import { Link, useNavigate } from "react-router-dom";
import checkOut from "../../assets/images/checkout/checkout.png";
import axios from "axios";

const Order = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:5000/bookings?email=${user?.email}`;
      axios
        .get(url, { withCredentials: true })
        .then((response) => {
          setOrders(response.data);
          console.log(response.data); // Handle the response data
        })
        .catch((error) => {
          console.error("Error fetching booking data:", error); // Handle errors
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);

    const process = confirm("Are you want to delete");
    if (process) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            alert("Delete successfully done");
            const remaining = orders.filter((user) => user._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const deleteAllOrders = () => {
    fetch("http://localhost:5000/bookings", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Delete successfully all orders");
          // setOrders(data.remainingOrders);
          navigate("/");
        }
      });
  };

  return (
    <div>
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
        <div className=" inset-0 bg-black rounded-lg mx-2 my-2 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white py-1 text-2xl  font-bold">
            <span className="text-orange-500   px-4 font-bold ">
              Total number of order:{" "}
              <span className="text-white">( {orders.length} )</span>
            </span>
          </h1>
        </div>
      </div>
      {orders?.map((order) => (
        <OrderList
          key={order._id}
          handleDelete={handleDelete}
          order={order}
        ></OrderList>
      ))}

      {/* Footer Buttons */}
      <div className="flex lg:w-3/4 mx-auto mb-5 justify-between items-center mt-8">
        <Link to={"/"}>
          <button className="flex items-center text-gray-600 hover:text-black">
            <span className="mr-2">↩</span> Continue Shopping
          </button>
        </Link>
        <button
          onClick={deleteAllOrders}
          className="flex items-center text-red-500 hover:text-red-600"
        >
          <span className="mr-2">🗑</span> Clear Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default Order;
