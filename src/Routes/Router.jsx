import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import RootLayout from "../RootLayout/RootLayout";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import AronnyDayaShifaDetails from "../Pages/AronnyDayaShifaDetails";
import Checkout from "../Pages/Checkout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/signup",
      //   element: <SignUp></SignUp>,
      // },

      {
        path: "/products/aronnyDayaShifa",
        element: <AronnyDayaShifaDetails></AronnyDayaShifaDetails>,
        // element: <Assignments></Assignments>,
        // loader: () => fetch("http://localhost:5000/assignments"),
      },

      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);
export default Router;
