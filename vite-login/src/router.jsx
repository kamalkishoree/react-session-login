import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Signup from "./Views/Signup";
import Login from "./Views/Login";
import Dashboard from "./Views/Dasboard";
import Surveys from "./Views/Surveys";
import DefaultLayout from "./Component/Layout/DefaultLayoiut";
import GuestLayout from "./Component/Layout/GuestLayouts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
