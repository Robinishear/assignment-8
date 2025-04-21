import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import Fooder from '../Fooder/Fooder';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home'

export const router = createBrowserRouter([
    {
         path: "/m",
       Component: Root,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
          index: true,
          path: "Home",
          element: <Home></Home>,
         
        },
       ],
    },
]);