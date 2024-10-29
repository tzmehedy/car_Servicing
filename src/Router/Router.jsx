import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Services from "../Pages/Home/Services/Services";
import AboutUsDetails from "../Pages/AboutUsDetails/AboutUsDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <AboutUsDetails></AboutUsDetails>
      },
      {
        path: "/register",
        element: <Register></Register>,
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
        path: "/myBookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      
      }
    ],
  },
]);

export default router;