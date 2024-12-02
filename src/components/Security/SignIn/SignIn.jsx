import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signUp from "../../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        alert("Successfully log in");

        const user = { email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);

            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className=" my-2 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
        {/* Left Illustration Section */}
        <div className=" md:flex w-1/2 justify-center">
          <img src={signUp} alt="Sign In Illustration" className="lg:h-80" />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-2/5">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign In
          </h2>
          <form onSubmit={handleSignIn} className="space-y-4">
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
                name="email"
                placeholder="Your email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Your password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600"
                  aria-label="Toggle Password Visibility"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none"
            >
              Sign In
            </button>
          </form>

          {/* Social Login Section */}
          <div className="flex justify-center mt-6">
            <p className="text-gray-600">Or Sign In with</p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className="bg-blue-100 p-2 rounded-full"
              aria-label="Sign in with Facebook"
            >
              <FaFacebookF className="text-blue-700" />
            </button>
            <button
              className="bg-blue-100 p-2 rounded-full"
              aria-label="Sign in with LinkedIn"
            >
              <FaLinkedinIn className="text-blue-700" />
            </button>
            <button
              className="bg-blue-100 p-2 rounded-full"
              aria-label="Sign in with Google"
            >
              <FaGoogle className="text-red-600" />
            </button>
          </div>

          {/* Footer */}
          <p className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-red-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
