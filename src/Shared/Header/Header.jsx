import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful.");
        setTimeout(() => {
          navigate("/"); // Use navigate to redirect
        }, 1000); // Optional delay for feedback
        return;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Define reusable menu items
  const item = (
    <>
      <li className={location.pathname === "/" ? "bg-blue-500 rounded" : ""}>
        <Link to="/">Home</Link>
      </li>
      <li
        className={location.pathname === "/about" ? "bg-green-500 rounded" : ""}
      >
        <Link to="/about">About</Link>
      </li>
      <li
        className={
          location.pathname === "/contact" ? "bg-green-500 rounded" : ""
        }
      >
        <Link to="/contact">Contact</Link>
      </li>
      <li
        className={
          location.pathname === "/order" ? "bg-purple-500 rounded" : ""
        }
      >
        <Link to="/order">Order</Link>
      </li>
      <li
        className={location.pathname === "/blog" ? "bg-purple-500 rounded" : ""}
      >
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar  text-black font-bold shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {item}
            <li>
              <details>
                <summary className="hover:text-blue-500">Services</summary>
                <ul className="p-2">
                  <li
                    className={
                      location.pathname === "/services/car"
                        ? "bg-blue-100 rounded"
                        : ""
                    }
                  >
                    <Link to="/car">Car</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/services/bike"
                        ? "bg-green-100 rounded"
                        : ""
                    }
                  >
                    <Link to="/bike">Bike</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/services/electronics"
                        ? "bg-purple-100 rounded"
                        : ""
                    }
                  >
                    <Link to="/electronics">Electronics</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-bold text-white"
        >
          <img className="lg:h-[60px] h-[50px] lg:py-2" src={logo} alt="" />
        </Link>
      </div>

      {/* Navbar Center for Larger Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-4">
          {item}
          <li>
            <details>
              <summary className="hover:text-yellow-500">Services</summary>
              <ul className="p-2 bg-gray-700 text-white rounded">
                <li
                  className={
                    location.pathname === "/services/car"
                      ? "bg-blue-500 rounded"
                      : ""
                  }
                >
                  <Link to="/car">Car</Link>
                </li>
                <li
                  className={
                    location.pathname === "/services/bike"
                      ? "bg-green-500 rounded"
                      : ""
                  }
                >
                  <Link to="/bike">Bike</Link>
                </li>
                <li
                  className={
                    location.pathname === "/services/electronics"
                      ? "bg-purple-500 rounded"
                      : ""
                  }
                >
                  <Link to="/electronics">Electronics</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Login/Register Buttons */}
      <div className="navbar-end hidden lg:flex space-x-4">
        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className="bg-blue-600 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link
              to="/signIn"
              className={`bg-blue-600 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium ${
                location.pathname === "/signIn" ? "bg-blue-800" : ""
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/signUp"
              className={`bg-green-600 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium ${
                location.pathname === "/signUp" ? "bg-green-800" : ""
              }`}
            >
              Sign Up
            </Link>
          </>
        )}
        ,
      </div>

      {/* CTA Button on Navbar End */}
      <div className="navbar-end lg:hidden">
        <Link
          to="/signIn"
          className={`bg-blue-600 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium ${
            location.pathname === "/signIn" ? "bg-blue-800" : ""
          }`}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
