const Facility = ({ service }) => {
  return (
    <div className="bg-gray-300 border border-red-400 rounded-md shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {service.name}
      </h3>
      <p className="text-gray-600">{service.details}</p>
    </div>
  );
};

export default Facility;
