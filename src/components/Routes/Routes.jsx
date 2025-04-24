import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LawyerDetails from "../pages/LawyerDetails/LawyerDetails";
import Proshno from "../pages/proshno/Proshno";
import Pahar from "../pages/Pahar/Pahar";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/lawyer-details/:id",
        element: <LawyerDetails />,
      },
      {
        path: "/My-Bookings",
        element: <Pahar/>
      }
      ,
      {
        path: "/blogs",
        element: <Proshno/>
      }, 
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
      
    ],
  },
]);
