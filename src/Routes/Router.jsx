import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import RootLayout from "../RootLayout/RootLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import CreateAssignment from "../Pages/CreateAssignment";
import Assignments from "../Pages/Assignments";
import UpdateAssignment from "../Pages/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails";
import SubmitAssignment from "../Pages/SubmitAssignment";
import MySubmitted from "../Pages/MySubmitted";
import PendingAssignment from "../Pages/PendingAssignment";
import axios from "axios";

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
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/assignments",
        element: <Assignments></Assignments>,
        loader: () =>
          fetch("https://learn-lounge-server.vercel.app/assignments"),
      },

      {
        path: "/createAssignment",
        element: (
          <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment/update/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment></UpdateAssignment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios.get(
            `https://learn-lounge-server.vercel.app/assignment/${params.id}`,
            {
              withCredentials: true,
            }
          ),
        // loader: ({ params }) =>
        //   fetch(`https://learn-lounge-server.vercel.app/assignment/${params.id}`),
      },
      {
        path: "/assignment/details/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          axios.get(
            `https://learn-lounge-server.vercel.app/assignment/${params.id}`,
            {
              withCredentials: true,
            }
          ),
      },
      {
        path: "/assignment/submit/:id",
        element: (
          <PrivateRoute>
            <SubmitAssignment></SubmitAssignment>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://learn-lounge-server.vercel.app/assignment/${params.id}`),
        loader: ({ params }) =>
          axios.get(
            `https://learn-lounge-server.vercel.app/assignment/${params.id}`,
            {
              withCredentials: true,
            }
          ),
      },
      {
        path: "/myAssignment",
        element: (
          <PrivateRoute>
            <MySubmitted></MySubmitted>
          </PrivateRoute>
        ),
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRoute>
            <PendingAssignment></PendingAssignment>
          </PrivateRoute>
        ),

        loader: () =>
          axios.get(
            "https://learn-lounge-server.vercel.app/assignments/pending",
            {
              withCredentials: true,
            }
          ),
      },
    ],
  },
]);
export default Router;
