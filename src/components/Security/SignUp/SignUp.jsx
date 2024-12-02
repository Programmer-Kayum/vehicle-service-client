import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signUp from "../../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (events) => {
    events.preventDefault();
    const form = events.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.confirmPassword.value;

    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    console.log(name, email, password, password2);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Successfully Sign Up");
        setTimeout(() => {
          navigate("/signIn"); // Use navigate to redirect
        }, 1000); // Optional delay for feedback
        return;
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="my-2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
        {/* Left Illustration Section */}
        <div className=" md:flex w-1/2 justify-center">
          <img src={signUp} alt="Sign Up Illustration" className="lg:h-80" />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password1"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password1"
                  name="password"
                  placeholder="Your password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password2"
                name="confirmPassword"
                placeholder="Confirm password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-center mt-6">
            <p className="text-gray-600">Or Sign Up with</p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-blue-100 p-2 rounded-full">
              <FaFacebookF className="text-blue-700" />
            </button>
            <button className="bg-blue-100 p-2 rounded-full">
              <FaLinkedinIn className="text-blue-700" />
            </button>
            <button className="bg-blue-100 p-2 rounded-full">
              <FaGoogle className="text-red-600" />
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?
            <Link to="/signIn" href="#" className="text-red-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
