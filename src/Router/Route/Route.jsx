import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Main/Main";
import Home from "../../components/Home/Home";
import Contact from "../../components/Contact/Contact";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Order from "../../components/Order/Order";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Car from "../../components/Services/Car";
import Bike from "../../components/Services/Bike";
import Electronics from "../../components/Services/Electronics";
import SignupPage from "../../components/Security/SignUp/SignUp";
import SignInPage from "../../components/Security/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CheckOut from "../../components/CheckOut/CheckOut";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/car",
        element: <Car></Car>,
      },
      {
        path: "/bike",
        element: <Bike></Bike>,
      },
      {
        path: "/electronics",
        element: <Electronics></Electronics>,
      },
      {
        path: "/signUp",
        element: <SignupPage></SignupPage>,
      },
      {
        path: "/signIn",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
