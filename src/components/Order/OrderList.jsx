const OrderList = ({ order, handleDelete }) => {
  const { img, price, _id, title, date } = order;
  return (
    <div>
      <div className="px-4 my-2 lg:w-3/4 mx-auto">
        <div className="space-y-6">
          {/* Cart Item */}
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4">
            {/* Product Image */}
            <img
              src={img} // Replace with dynamic content
              alt="Product"
              className="w-20 h-20 md:w-24 md:h-24 rounded object-cover rounded transition-transform duration-300 hover:scale-150"
            />

            {/* Product Details */}
            <div className="flex-1 md:ml-6 text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold">{title}</h3>
              <p className="text-sm md:text-base text-gray-500">Color: Green</p>
              <p className="text-sm md:text-base text-gray-500">Size: S</p>
            </div>

            {/* Price and Date */}
            <div className="flex flex-col lg:mr-32 md:flex-row items-center md:space-x-6 mt-4 md:mt-0">
              <p className="text-base md:text-lg mr-10 font-semibold">
                $ {price}
              </p>
              <p className="text-sm md:text-base text-gray-500">{date}</p>
            </div>
            {/* Status */}
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-red-500 text-white text-xs md:text-sm px-3 py-1 rounded transition-transform duration-300 hover:scale-105">
                Pending
              </span>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleDelete(_id)}
              className="mt-4 lg:ml-10 md:mt-0 text-white bg-black p-2 rounded-lg transition-all duration-500 ease-in-out hover:text-gray-500 hover:bg-orange-500 hover:scale-110"
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>

          {/* Repeatable Cart Item */}
          {/* Copy this block for additional items */}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
