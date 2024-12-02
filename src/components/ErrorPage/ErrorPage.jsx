import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>
      <p className="text-2xl md:text-3xl font-bold mb-4">
        Oops! Page Not Found
      </p>
      <p className="text-center mb-8">
        The page you are looking for doesn’t exist or an error occurred.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 text-lg font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
